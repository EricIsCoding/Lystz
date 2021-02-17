class API::GroupsController < ApplicationController
  before_action :set_group, only: [:show, :update, :destroy]

  # GET /groups
  def index
    @groups = Group.all
    
    render json: @groups
  end

  # GET /groups/1
  def show
    render json: GroupSerializer.new(@group).serializable_hash.to_json
  end

  # POST /groups
  def create
    group = Group.new(group_name: group_params["group_name"])

    if(group.save)
      current_user.group = group
      group.users << current_user
      user = User.find_by(email: group_params['invite'])
      if(user)
        GroupInvite.create(
          user_id: user.id,
          group_name: group.group_name,
          group_id: group.id,
          status: "pending",
          invited_by: current_user.email
        )
        render json: UserSerializer.new(current_user).serializable_hash.to_json
      end
    else
      render json: @group.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /groups/1
  def update
    if params['group']['invite'] == "accepted"
      @group.users << current_user
      if @group.save
        current_user.update(group_invite: nil)
        render json: UserSerializer.new(current_user).serializable_hash.to_json
      end
    elsif params['group']['invite'] == "declined"
      current_user.update(group_invite: nil)
      render json: UserSerializer.new(current_user).serializable_hash.to_json
    else
      render json: @group.errors, status: :unprocessable_entity
    end
  end

  # DELETE /groups/1
  def destroy
    @group.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_group
      @group = Group.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def group_params
      params.require(:group).permit(:group_name, :invite)
    end
end

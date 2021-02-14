class API::GroupsController < ApplicationController
  before_action :set_group, only: [:show, :update, :destroy]

  # GET /groups
  def index
    @groups = Group.all

    binding.remote_pry

    render json: @groups
  end

  # GET /groups/1
  def show
    render json: GroupSerializer.new(@group).serializable_hash.to_json
  end

  # POST /groups
  def create
    group = group.new(group_name: group_params["group_name"])

    if(group.save)
      current_user.group_invite = "accepted"
      group.users << current_user
      user = User.find_by(email: group_params['invite'])
      if(user)
        user.group = group
        user.group_invite = "recieved"
        render json: @group
      end
    else
      render json: @group.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /groups/1
  def update

    if @group.update(group_params)
      render json: @group
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

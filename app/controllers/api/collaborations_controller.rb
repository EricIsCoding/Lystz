class API::CollaborationsController < ApplicationController
  before_action :set_collaboration, only: [:show, :edit, :update, :destroy]

  # GET /api/collaborations
  def index
    collaborations = Collaboration.all

    render json: collaborations
  end

  # GET api/collaborations/1
  def show
    render json: @collaboration
  end

  # POST api/collaborations/1
  def create
    collaboration = Collaboration.new(collaboration_params)

    if collaboration.save
      render json: { status: :created, collaboration: collaboration }
    else
      render json: { errors: collaboration.errors, status: :unprocessable_entity }
    end
  end

  # PATCH/PUT api/collaborations/1
  def update

    if @collaboration.update(collaboration_params)
      render json: { status: :updated, collaboration: @collaboration }
    else
      render json: { errors: @collaboration.errors, status: :unprocessable_entity }
    end
  end

  # DELETE api/collaborations/1
  def destroy
    @collaboration.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_collaboration
      @collaboration = Collaboration.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def collaboration_params
      params.require(:collaboration).permit(:collaborator, :piece, :format, :information)
    end
end
  
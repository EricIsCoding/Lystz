class API::HomeController < ApplicationController
  def index
    render json: UserSerializer.new(current_user).serializable_hash.to_json
  end
end



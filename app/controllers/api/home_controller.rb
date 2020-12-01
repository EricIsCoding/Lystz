module API
    class HomeController < ApplicationController
      def index
        byebug;
        render json: UserSerializer.new(current_user).serializable_hash.to_json
      end
    end
  end
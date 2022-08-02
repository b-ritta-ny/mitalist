class FavoritesController < ApplicationController
    wrap_parameters format: []
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    before_action :authorize 

    def create 
        new_favorite = @current_user.favorites.create!(favorite_params)
        render json: new_favorite, status: :created
    end
    
    def index 
        render json: @current_user.animes
    end

    private 
    
    def favorite_params
        params.permit(:anime_id)
    end
    
    def authorize 
        return render json:{error: "Not Authorized"}, status: :unauthorized unless session.include? :user_id
    end
    
    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors }, status: :unprocessable_entity
    end
end

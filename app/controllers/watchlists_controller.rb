class WatchlistsController < ApplicationController
    wrap_parameters format: []
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    before_action :authorize 

    def index
        render json: @current_user.watchlists
    end

    private 
    
    def authorize 
        return render json:{error: "Not Authorized"}, status: :unauthorized unless session.include? :user_id
    end
    
    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors }, status: :unprocessable_entity
    end
end

class AnimesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    
    def index
        render json: Anime.all
      end
    
    def create
        anime = @current_user.anime.create!(anime_params)
        render json: anime, status: :created
    end
    
    def show 
        anime = Anime.find(params[:id])
        render json: anime 
    end

    def update
        respond_to do |format|
          if @anime.update(anime_params)
            format.html { redirect_to @anime, notice: 'Anime was successfully updated.' }
            format.json { render :show, status: :ok, location: @anime }
          else
            format.html { render :edit }
            format.json { render json: @anime.errors, status: :unprocessable_entity }
          end
        end

    private
    
    def anime_params
        params.permit(:title)
    end

    def render_not_found_response
        render json: { error: "Anime not found" }, status: :not_found
    end
end

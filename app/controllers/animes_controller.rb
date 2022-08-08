class AnimesController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    
  def index
    render json: Anime.all
  end
    
  def create
    anime = @current_user.animes.create!(anime_params)
    render json: anime, status: :created
  end

  def show 
    anime = Anime.find(params[:id])
    render json: anime 
  end  

  def update
    anime = find_anime 
    if @current_user.id == anime.user_id 
      anime.update!(anime_params)
      render json: anime, include: :user, status: :accepted 
    else 
      return render json: { error: "Not authorized" }, status: :unauthorized 
    end
  end

  private
    
  def anime_params
    params.require(:anime).permit!
  end

  def find_anime
    Anime.find_by(id: params[:id])
  end

  def render_not_found_response
    render json: { error: "Anime not found" }, status: :not_found
  end
end

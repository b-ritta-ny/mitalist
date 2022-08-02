class ApplicationController < ActionController::API
    include ActionController::Cookies
    before_action :current_user

  private 
  
  def current_user 
    @current_user = User.find(session[:user_id]) if session.include? :user_id
  end

    # def hello_world
    #     session[:count] = (session[:count] || 0) + 1
    #     render json: { count: session[:count] }
    # end
    
end

Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  
  # tester route
  # get '/hello', to: 'application#hello_world'

  # user creation & authentication
  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  get "/me", to: "users#show"
  delete "/logout", to: "sessions#destroy"

  resources :users, only: [:show, :create]

  # resources :users, shallow: true do
  resources :animes, only: [:index, :show, :create]
  # resources :favorites, only: [:index, :create]
  #   resources :watchlists, only: :index
  # end

    # 
  get '/my-anime', to: 'animes#index'
  post '/new', to: 'animes#create'


  # fallback route 
  get '*path', to: 'fallback#index', constraints: ->(req) { !req.xhr? && req.format.html? }
  
end


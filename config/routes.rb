Rails.application.routes.draw do
  resources :likes, only: [:show]
  resources :comments, only: [:create]
  resources :videos
  resources :users, only: [:index, :show, :create, :delete]
  
  get '/hello', to: 'application#hello_world'

  post "/signup", to: "users#create"
  get "/me", to: "users#me"
  post "/login", to: "session#create"
  delete "/logout", to: "session#destroy"
  post "/follow", to: "friendships#create"

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end

Rails.application.routes.draw do
  resources :likes, only: [:show]
  resources :comments, only: [:create]
  resources :videos
  resources :users, only: [:index, :create, :delete]
  
  get '/hello', to: 'application#hello_world'

  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end

Rails.application.routes.draw do
  resources :likes
  resources :comments, only: [:create]
  resources :videos, only: [:index, :show, :create, :update, :destroy]
  resources :users
  resources :friendships, only: [:create, :destroy]
 
  post "/signup", to: "users#create"
  get "/me", to: "users#me"

  post "/login", to: "session#create"
  delete "/logout", to: "session#destroy"

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end

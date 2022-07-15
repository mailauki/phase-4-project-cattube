Rails.application.routes.draw do
  resources :likes
  resources :comments, only: [:create]
  resources :videos, only: [:index, :show, :alpha, :create, :update, :destroy]
  resources :users
  resources :friendships, only: [:create, :destroy]
 
  post "/signup", to: "users#create"
  get "/me", to: "users#me"

  post "/login", to: "session#create"
  delete "/logout", to: "session#destroy"

  get "/alpha", to: "videos#alpha"

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end

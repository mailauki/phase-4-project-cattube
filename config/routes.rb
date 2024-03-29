Rails.application.routes.draw do
  resources :likes, only: [:create, :destroy]
  resources :comments, only: [:create]
  resources :videos
  resources :users, only: [:index, :show]
  resources :friendships, only: [:create, :destroy]
 
  post "/signup", to: "users#create"
  get "/me", to: "users#me"

  post "/login", to: "session#create"
  delete "/logout", to: "session#destroy"

  get "/search/:keyword", to: "videos#search"

  get "/random_nine_videos", to: "videos#random_nine"

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end

Rails.application.routes.draw do
  resources :likes
  resources :comments, only: [:create]
  resources :videos, only: [:index, :show]
  resources :users
 
  post "/signup", to: "users#create"
  get "/me", to: "users#me"
  get "/:username", to: "users#show"

  post "/login", to: "session#create"
  delete "/logout", to: "session#destroy"

  post "/follow", to: "friendships#create"
  delete "/:id/unfollow", to: "friendships#destroy"

  post "/like", to: "likes#create"
  delete "/:id/unlike", to: "likes#destroy"

  post "/new", to: "videos#create"
  patch "/:id/edit", to: "videos#update"
  delete "/:id/remove", to: "videos#destroy"

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end

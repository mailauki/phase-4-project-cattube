Rails.application.routes.draw do
  resources :likes, only: [:show]
  resources :comments, only: [:index, :create]
  resources :videos
  resources :users, only: [:index, :create, :delete]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  
  get '/hello', to: 'application#hello_world'

  get '/me', to: 'user#show'
  # get '/login'
  # get '/logout'

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end

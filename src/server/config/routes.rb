Rails.application.routes.draw do

  resources :users
  resources :user_components
  resources :library_components

  post "/login", to: "auth#login"
  get "/auto_login", to: "auth#auto_login"
  get "/user_is_authed", to: "auth#user_is_authed"

end

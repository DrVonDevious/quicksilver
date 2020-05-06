Rails.application.routes.draw do

  resources :users
  resources :user_components
  resources :library_components

  post "/login", to: "auth#login"
  get "/auto_login", to: "auth#auto_login"

  post "/user_components", to: "auth#user_is_authed"
  get "/user_components/:id", to: "auth#user_is_authed"
  delete "/user_components/:id", to: "auth#user_is_authed"

  post "/library_components", to: "auth#user_is_authed"
  get "/library_components/:id", to: "auth#user_is_authed"
  delete "/library_components/:id", to: "auth#user_is_authed"

end

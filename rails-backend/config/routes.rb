Rails.application.routes.draw do
  resources :likes
  resources :comments
  # resources :users
  get "user/:id", to: "users#index"
get "users/:username/:password", to: "users#show" 
post "users", to: "users#create"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

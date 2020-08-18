Rails.application.routes.draw do
  resources :comments
  # resources :users
get "users/:username", to: "users#show"
post "users", to: "users#create"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

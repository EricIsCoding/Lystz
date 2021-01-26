Rails.application.routes.draw do
  devise_for :users

  #resources for api calls
  namespace :api, defaults: { format: 'json' } do
    resources :items
    resources :blocks
    resources :vendors
  end

  #default path when entering site
  root 'pages#index'

  # IMPORTANT #
  # This `match` must be the *last* route in routes.rb
  # Forces all paths to React App Entry Point
  match '*path', to: 'pages#index', via: :all
end

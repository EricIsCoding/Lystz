Rails.application.routes.draw do
  devise_for :users

  #default path when entering site
  root 'pages#index'
end

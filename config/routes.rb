Rails.application.routes.draw do
  get 'pages/home'
  get 'pages/about'
  get 'pages/projects'
  get 'pages/contact'
  get "/pages/:page" => "pages#show"

  root 'pages#home'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

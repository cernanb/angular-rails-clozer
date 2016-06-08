Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :opportunities
    resources :notes
  end

  root 'application#home'
end

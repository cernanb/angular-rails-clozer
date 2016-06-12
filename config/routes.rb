Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :opportunities do
      resources :notes, only: [:create]
    end
  end

  root 'application#home'
end

Rails.application.routes.draw do
  devise_for :users
  namespace :api, defaults: {format: :json} do
    # get 'opportunities/:user_id' => "opportunities#index"
    resources :opportunities do
      resources :notes, only: [:create]
    end
  end



  root 'application#home'
  get "*path" => "application#home"
end

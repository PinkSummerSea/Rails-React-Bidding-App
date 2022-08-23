Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  resources :auctions, only: [:create, :show, :index] do
    resources :bids, only: [:create]
  end
  resource :session, only: [:create, :destroy]
  resources :users, only: [:create] do
    get :current, on: :collection
  end
end

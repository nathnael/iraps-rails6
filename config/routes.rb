Rails.application.routes.draw do
  resources :invoices
  resources :vendors
  devise_for :users
  get 'activity/mine'
  get 'activity/feed'
  get 'activity/load_data'
  get 'welcome/index'

  root to: 'dashboard#index'
end

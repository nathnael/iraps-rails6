Rails.application.routes.draw do
  get 'user/index'
  get 'user/show'
  resources :permissions
  resources :invoices
  resources :vendors
  devise_for :users
  # put '/invoices/assign_invoice/:id', to: 'invoices#assign_invoice'

  root to: 'dashboard#index'
end

Rails.application.routes.draw do
  root 'home#page'
  get 'test/data'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

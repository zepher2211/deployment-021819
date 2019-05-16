Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users
  resources :dragons

  post '/login', to: 'users#authenticate'

  get '*path', to: "application#react_app", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end

end

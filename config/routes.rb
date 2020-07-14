Rails.application.routes.draw do
  resources :projects do
    resources :students
  end

  resources :students do
    resources :projects
  end
end

# For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
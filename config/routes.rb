Rails.application.routes.draw do
  resources :projects 
  resources :students, only: :index

  get '/students/:id/projects/:project_id', to: 'students#add_project' 
end

# For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
require 'api_version_constraint'
Rails.application.routes.draw do
  
  devise_for :users, only: [:sessions], controllers: { session: 'api/v2/sessions' }
  
  namespace :api, defaults: { format: :json }, path: "/" do
    namespace :v2, path: "/" do
      resources :users, path: "/users", only: [:show, :create, :update, :destroy]
      resources :sessions, path:"/sessions", only: [:create, :destroy]
      resources :tasks, path:'/tasks', only: [:index, :show, :create, :update, :destroy]
    end
  end
end

#   namespace 'api' do 
#     # namespace 'v1' do
#     #   resources :users, only: [:show, :create, :update, :destroy]
#     #   resources :sessions, only: [:create, :destroy]
#     #   resources :tasks, only: [:index, :show, :create, :update, :destroy]
#     # end

#     namespace 'v2' do
#       resources :users, only: [:show, :create, :update, :destroy]
#       resources :sessions, only: [:create, :destroy]
#       resources :tasks, only: [:index, :show, :create, :update, :destroy]
#     end
#   end
# end

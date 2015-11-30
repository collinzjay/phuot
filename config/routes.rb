Rails.application.routes.draw do
  
  ### API
namespace :api, defaults: {format: :json} do
  	namespace :v1 do
  		namespace :admincp do
		    get '/users'                    => 'users#index'
		    get '/users/logout'				=> 'users#logout'				
		    get '/users/register'           => 'users#register'
		    post '/users'					=> 'users#create'
		    post '/users/login'				=> 'users#login'
		end

		namespace :userpage, defaults: {format: :json} do 
			resources :users do
				resources :phuots
			end
			post 'users/login' 							=> 'users#login'
		end
  	end
end

### UI
get '/users/register' => 'users#register_form'
get '/users/login' => 'users#login_form'
end

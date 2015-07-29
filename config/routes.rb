Rails.application.routes.draw do
  
  namespace :api do
  	namespace :v1 do
  		namespace :admincp do
		    get '/users'                    => 'users#index'
		    get '/users/login'              => 'users#login'
		    get '/users/register'           => 'users#register'  
			end	

			namespace :userpage, defaults: {format: :json} do 
				resources :users do
					resources :phuots
				end

				post 'users/login' 							=> 'users#login'
			end
  	end
  end
end

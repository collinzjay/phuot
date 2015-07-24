Rails.application.routes.draw do
  
  namespace :admincp do
    get '/users'                    => 'users#index'
    get '/users/login'              => 'users#login'
    get '/users/register'           => 'users#register'  
  end
  

end

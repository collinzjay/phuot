include Authorize
class Api::V1::Admincp::UsersController < Api::V1::Admincp::ApplicationController
	before_action :auth?, only: :index
	def index
		@users = User.all
	end

	def login
		password = params[:user][:password]
		email = params[:user][:email]

		@user = User.find_by(email: email)

		if @user.present?
			if @user.password == password
				if (auth?(email))
					return render json: {message: "Have been loged in before"}, status: 200
				else
			    	token = Authorize.token(email, password)
			    	@token = @user.tokens.new(token: token, expired_date: Time.now + 1.day, status: 0)
			    	if @token.save
			    		@token
			    	else
			    		return render json: {message: "Can not login"}, status: 401
			    	end
				end
			else
			    return render json: {message: "Password was not correct"}, status: 401
			end
		else
			return render json: {message: "User does not exist !"}, status: 401
		end
	end

	def register
	end


end

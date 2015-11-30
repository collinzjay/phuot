include Authorize
class Api::V1::Admincp::UsersController < Api::V1::Admincp::ApplicationController

def index
		if auth?
			return @users = User.all
		end
		return render json: {message: "You need login to use this feature"}, status: 401
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

	def create
		return render json: {message: 'You had login'}, status: 200 if auth?

		email = params[:user][:email]
		return render json: {message: 'Account already taken'}, status: 409 if User.exists?(email: email)

		password = params[:user][:password]
		password_confirm = params[:user][:password_confirm]
		@user = User.new(user_params)

		return render plain: "Password not match" if password != password_confirm

		@user.password = password

		if @user.save
			render plain: "Ok"
		else
			render plain: "Error"
		end
	end

	def logout
		if logout
			return render {message: "Logout successful"}, status: 200
		else
			return render {message: "Logout false"}, status: 400
		end
	end

	private
		def user_params
			params.require(:user).permit(:name, :email)
		end


end

class Api::V1::Userpage::UsersController < Api::V1::User::ApplicationController
	skip_before_filter :verify_authenticity_token
	def index
		@user = User.all
		render plain: "ok"
	end

	def create
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

	def login
		password = params[:user][:password]
		email = params[:user][:email]

		@user = User.find_by(email: email)

		if @user.present?
			if @user.password == password
		    render plain: "Login successful !"
			else
		    render plain: "Password is not correct !"
		  end
		else
			render plain: "User dose not exist !"
		end
	end

	def show
	end

	def update
	end

	def destroy
	end

	private
		def user_params
			params.require(:user).permit(:name, :email)
		end
end
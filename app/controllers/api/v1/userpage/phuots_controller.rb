class Api::V1::Userpage::PhuotsController < Api::V1::User::ApplicationController
  skip_before_filter :verify_authenticity_token
	def index
		@phuots = Phuot.all
	end

	def create

		if User.exists?(id: params[:user_id])
			user = User.find(params[:user_id])
			@phuot = user.phuots.new(phuot_params)
			
			if @phuot.save
				render plain: "Create Phuot Successful!"
			else
				render plain: "Have errors"
			end
		else
			render plain: "User dose not exist"
		end
	end

	def show
	end

	def update
	end

	def destroy
	end

	private
		def phuot_params
			params.require(:phuot).permit(:title, :description, :start_time, :end_time, :status)
		end
end
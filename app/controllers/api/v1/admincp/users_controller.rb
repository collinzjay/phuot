class Api::V1::Admincp::UsersController < Api::V1::Admincp::ApplicationController 

	def index
		@users = User.all
	end

	def login
	end

	def register
	end

	private

end

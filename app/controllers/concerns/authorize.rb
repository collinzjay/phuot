require 'jwt'
module Authorize
	def token(email, password)
		payload = {
			email: email,
			password: password
		}
		token = JWT.encode(payload, 'secret-key')
		return token
	end

	def auth?
		token = request.headers["X-AUTH-TOKEN"]
		if token.blank?
			return false
		end
		if Token.where(token: token).where("expired_date > ?", Time.now).where(status: false).exists?
			return true
		end
		return false
	end

	def auth?(email = {})
		token = request.headers["X-AUTH-TOKEN"]
		if token.blank?
			return false
		end
		if Token.where(token: token).where("expired_date > ?", Time.now).where(status: false).exists?
			data, type = JWT.decode(token, 'secret-key')
			if data['email'] == email
				return true
			end
		end
		return false
	end
end

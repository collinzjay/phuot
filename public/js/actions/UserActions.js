var AppDispatcher = require('../dispatcher/AppDispatcher');
var UserConstants = require('../constants/UserConstants');

var PhuotActions = {
	//  Create Phuot
	registerUser: function(data) {
		AppDispatcher.handleAction({
			actionType: UserConstants.USER_REGISTER,
			data: data
		})
	},

	// Delete Phuot
	login: function(data) {
		AppDispatcher.handleAction({
			actionType: UserConstants.USER_LOGIN,
			data: data
		})
	},

	// Update Phuot
	logout: function() {
		AppDispatcher.handleAction({
			actionType: UserConstants.USER_LOGOUT
		})
	}

};

module.exports = PhuotActions;
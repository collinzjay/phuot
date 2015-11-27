var AppDispatcher = require('../dispatcher/AppDispatcher');
var PhuotConstants = require('../constants/PhuotConstants');

var PhuotActions = {
	//  Create Phuot
	createPhuot: function(data) {
		AppDispatcher.handleAction({
			actionType: PhuotConstants.PHUOT_CREATE,
			data: data
		})
	},

	// Delete Phuot
	deletePhuot: function(id) {
		AppDispatcher.handleAction({
			actionType: PhuotConstants.PHUOT_DELETE,
			id: id
		})
	},

	// Update Phuot
	updatePhuot: function(id, data) {
		AppDispatcher.handleAction({
			actionType: PhuotConstants.PHUOT_UPDATE,
			id: id,
			data: data
		})
	}

};

module.exports = PhuotActions;
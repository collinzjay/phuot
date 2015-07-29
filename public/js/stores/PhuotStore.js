var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var PhuotConstants = require('../constants/PhuotConstants');
var _ = require('underscore');

var _phuots = {};

function createPhuot(data) {

  //Call API at here
	console.log(" Create Phuot ");
}

function updatePhuot(id, data) {
	console.log(" update Phuot ");
} 

function destroyPhuot(id) {
	console.log(" destroy Phuot ");
}

// Extend Cart Store with EventEmitter to add eventing capabilities
var PhuotStore = _.extend({}, EventEmitter.prototype, {

  // Return cart items
  getPhuots: function() {
    return _phuots;
  },

  // Emit Change event
  emitChange: function() {
    this.emit('change');
  },

  // Add change listener
  addChangeListener: function(callback) {
    this.on('change', callback);
  },

  // Remove change listener
  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  }

});

// Register callback with AppDispatcher
AppDispatcher.register(function(payload) {
  var action = payload.action;
  var text;

  switch(action.actionType) {

    // Respond to CART_ADD action
    case PhuotConstants.PHUOT_CREATE:
      createPhuot(action.data);
      break;

    // Respond to CART_VISIBLE action
    case PhuotConstants.PHUOT_UPDATE:
      updatePhuot(action.id, action.data);
      break;

    // Respond to CART_REMOVE action
    case PhuotConstants.PHUOTE_DELETE:
      destroyPhuot(action.id);
      break;

    default:
      return true;
  }

  // If action was responded to, emit change event
  PhuotStore.emitChange();

  return true;

});

module.exports = PhuotStore;
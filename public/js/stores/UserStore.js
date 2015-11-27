var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var UserConstants = require('../constants/UserConstants');
var _ = require('underscore');

var _users = {};

function registerUser(data) {
  $.post('/api/v1/userpage/users', {user: data}, function(result){
    console.log(result);
  });
}

function updateUser(id, data) {
	console.log(" update USer ");
} 

function login(data) {
  $.post('/api/v1/userpage/userslogin', {user: data}, function(result){
    console.log(result);
  });
}

function logout() {
  $.get('/api/v1/userpage/users/logout', function(result) {
  })
}

// Extend Cart Store with EventEmitter to add eventing capabilities
var UserStore = _.extend({}, EventEmitter.prototype, {

  // Return cart items
  getUsers: function() {
    return _users;
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
    case UserConstants.USER_REGISTER:
      registerUser(action.data);
      UserStore.emitChange();
      break;

    // Respond to CART_VISIBLE action
    case UserConstants.USER_LOGIN:
      login(action.data);
      UserStore.emitChange();
      break;

    // Respond to CART_REMOVE action
    case UserConstants.USER_LOGOUT:
      logout();
      UserStore.emitChange();
      break;

    default:
      return true;
  }

  // If action was responded to, emit change event
  UserStore.emitChange();

  return true;

});

module.exports = UserStore;
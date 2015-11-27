var React = require('react');
var UserStore = require('../../stores/UserStore');
var UserActions = require('../../actions/UserActions');

var Router = require('react-router');
var Route = Router.Route;
var Link = Router.Link;


function getAllUsers() {
  return {
    allUsers: UserStore.getUsers()
  };
}

// Flux cart view
var UserLogin = React.createClass({
  
  getInitialState: function() {
    return getAllUsers();
  },

  componentDidMount: function() {
    UserStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    UserStore.removeChangeListener(this._onChange);
  },

  register: function() {

    var email = React.findDOMNode(this.refs.email).value.trim();
    var password = React.findDOMNode(this.refs.password).value.trim();

    var userData = {
      email: email,
      password: password
    }

    UserActions.login(userData);

    React.findDOMNode(this.refs.email).value = '';
    React.findDOMNode(this.refs.password).value = '';
  },

  // Render cart view
  render: function() {

    return (
      <div className="signup_wrapper">
        <div className="row">
          <div className="right_block">
            <div className="row">
              <form className="col-md-12 col-sm-12 col-xs-12">

                <input style={{display: 'none'}} />
                <input type="password" style={{display: 'none'}} />
                <h2 className="signup-heading">Signin</h2>
                <div className="row">
                    <div className="input-field col-md-12 col-sm-12 col-xs-12">
                        <i className="ion-coffee prefix"></i>
                        <input id="icon_prefix-2" ref="name" type="text" className="validate" />
                        <label htmlFor="icon_prefix-2">Username</label>
                    </div>
                    <div className="input-field col-md-12 col-sm-12 col-xs-12">
                        <i className="ion-key prefix"></i>
                        <input id="icon_prefix-3" type="password" className="validate" ref="password" />
                        <label htmlFor="icon_prefix-3">Password</label>
                    </div>
                </div>
                <div className="bottom_info">
                    <a href="#" className="pull-right" data-toggle="modal" data-target="#forgot">Forgot password?</a>
                    <Link to={'/register'} className="pull-left">Register new account</Link>
                </div>
                <div className="clearfix"></div>
                <a href="#" className="btn btn-primary btn-block">Sign in</a>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  },

  _onChange: function() {
    this.setState(getAllUsers());
  }

});

module.exports = UserLogin;
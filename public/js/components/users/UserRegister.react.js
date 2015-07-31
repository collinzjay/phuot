var React = require('react');
var UserStore = require('../../stores/UserStore');
var UserActions = require('../../actions/UserActions');


function getAllUsers() {
  return {
    allUsers: UserStore.getUsers()
  };
}

// Flux cart view
var UserRegister = React.createClass({
  
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

    var name = React.findDOMNode(this.refs.name).value.trim();
    var email = React.findDOMNode(this.refs.email).value.trim();
    var password = React.findDOMNode(this.refs.password).value.trim();
    var password_confirm = React.findDOMNode(this.refs.password_confirm).value.trim();

    var userData = {
      name: name,
      email: email,
      password: password,
      password_confirm: password_confirm
    }

    UserActions.registerUser(userData);

    React.findDOMNode(this.refs.name).value = '';
    React.findDOMNode(this.refs.email).value = '';
    React.findDOMNode(this.refs.password).value = '';
    React.findDOMNode(this.refs.password_confirm).value = '';
  },

  // Render cart view
  render: function() {

    return (
        <form className="col-md-12">
          <input style={{display: "none"}} />
          <input type="password" style={{display: "none"}} />
          <h2 className="signup-heading">Signup</h2>
          <div className="row">
              <div className="input-field col-md-12">
                  <i className="ion-ios-person prefix"></i>
                  <input id="icon_prefix" type="text" ref="name" className="validate" />
                  <label htmlFor="icon_prefix">Name</label>
              </div>
              <div className="input-field col-md-12">
                  <i className="ion-email prefix"></i>
                  <input id="icon_prefix-4" type="email" ref="email" className="validate" />
                  <label htmlFor="icon_prefix-4">Email</label>
              </div>
              <div className="input-field col-md-12">
                  <i className="ion-key prefix"></i>
                  <input id="icon_prefix-3" type="password" ref="password" className="validate" />
                  <label htmlFor="icon_prefix-3">Password</label>
              </div>
              <div className="input-field col-md-12">
                  <i className="ion-key prefix"></i>
                  <input id="icon_prefix-3" type="password" ref="password_confirm" className="validate" />
                  <label htmlFor="icon_prefix-3">Password Confirm</label>
              </div>
          </div>
          <a href="/users/login" className="pull-right">Already have an account ?</a>
          <div className="clearfix"></div>
          <div className="piluku-check">
              <input type="checkbox" id="c1" />
              <label htmlFor="c1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati rerum, porro recusandae exercitationem, doloremque, dolorem placeat soluta fugiat magnam atque quidem consequuntur tenetur, dignissimos nulla repellat velit necessitatibus tempore cumque!</label>
          </div>
          <a href="#" className="btn btn-primary btn-block" onClick={this.register}>register</a>
        </form>
    );
  },

  _onChange: function() {
    this.setState(getAllUsers());
  }

});

module.exports = UserRegister;
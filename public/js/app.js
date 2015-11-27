var React = require('react');
var PhuotActions = require('./actions/PhuotActions');

// Require Router
var Router = require('react-router');
var Route = Router.Route;
var Link = Router.Link;

var RouteHandler = Router.RouteHandler;
var DefaultRoute = Router.DefaultRoute;

var PhuotComponents = require('./components/PhuotComponents.react');
var UserRegister = require('./components/users/UserRegister.react');
var UserLogin = require('./components/users/UserLogin.react');

var App = React.createClass({
  render: function () {
    return (
      <div>
        <RouteHandler/>
      </div>
    );
  }
});

var routes = (
  <Route name="app" path="/" handler={App}>
    <DefaultRoute handler={UserLogin}/>
    <Route name="login" handler={UserLogin}/>
    <Route name="register" handler={UserRegister}/>
  </Route>
);
// Or, if you'd like to use the HTML5 history API for cleaner URLs:

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});
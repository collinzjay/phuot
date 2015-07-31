var React = require('react');
var PhuotActions = require('./actions/PhuotActions');
var PhuotComponents = require('./components/PhuotComponents.react');
var UserRegister = require('./components/users/UserRegister.react');
var UserLogin = require('./components/users/UserLogin.react');

React.render(
	<UserLogin />,
	document.getElementById('login')
);

React.render(
	<UserRegister />,
	document.getElementById('register')
);

React.render(
	<PhuotComponents />,
	document.getElementById('content')
);

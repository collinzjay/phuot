var React = require('react');
var PhuotStore = require('../stores/PhuotStore');
var PhuotActions = require('../actions/PhuotActions');

// Flux cart view
var PhuotComponents = React.createClass({

  createPhuot: function() {
    PhuotActions.createPhuot("asdasdasdasdasd");
  },

  // Render cart view
  render: function() {
    return (
      <div>
        <h4> Test Create Phuot </h4>
        <button id="createphuot" name="createphuot" onClick={this.createPhuot}>Create</button>
      </div>
    );
  },

});

module.exports = PhuotComponents;
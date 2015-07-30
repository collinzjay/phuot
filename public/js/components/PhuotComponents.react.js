var React = require('react');
var PhuotStore = require('../stores/PhuotStore');
var PhuotActions = require('../actions/PhuotActions');


function getAllPhuots() {
  return {
    allPhuots: PhuotStore.getPhuots()
  };
}

// Flux cart view
var PhuotComponents = React.createClass({
  
  getInitialState: function() {
    return getAllPhuots();
  },

  componentDidMount: function() {
    PhuotStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    PhuotStore.removeChangeListener(this._onChange);
  },

  createPhuot: function() {

    var title = React.findDOMNode(this.refs.title).value.trim();
    var description = React.findDOMNode(this.refs.description).value.trim();
    var start_time = React.findDOMNode(this.refs.start_time).value.trim();
    var end_time = React.findDOMNode(this.refs.end_time).value.trim();
    var status = React.findDOMNode(this.refs.status).value.trim();

    var phuotData = {
      title: title,
      description: description,
      start_time: start_time,
      end_time: end_time,
      status: status
    }

    PhuotActions.createPhuot(phuotData);

    React.findDOMNode(this.refs.title).value = '';
    React.findDOMNode(this.refs.description).value = '';
    React.findDOMNode(this.refs.start_time).value = '';
    React.findDOMNode(this.refs.end_time).value = '';
    React.findDOMNode(this.refs.status).value = '';
  },

  // Render cart view
  render: function() {

    var allPhuots = this.state.allPhuots;
    var list = [];
    allPhuots.forEach(function(phuot){
      {
        list.push(<li>{phuot.title}</li>);
      }
    });

    return (
      <div>
        <div>
          <h4> Test Create Phuot </h4>
            <input type="text" ref="title" className="inputPhuot" placeholder="Nhap Vao title" /> <br/>
            <input type="text" ref="description" className="inputPhuot" placeholder="Nhap Vao description" /> <br/>
            <input type="text" ref="start_time" className="inputPhuot" placeholder="Nhap Vao start_time" /> <br/>
            <input type="text" ref="end_time" className="inputPhuot" placeholder="Nhap Vao end_time" /> <br/>
            <input type="text" ref="status" className="inputPhuot" placeholder="Nhap Vao status" /> <br/>
            <button id="createphuot" name="createphuot" onClick={this.createPhuot}>Create</button> <br/>
        </div>
        <div>
          <ul>
            {list}
          </ul>
        </div>
      </div>
    );
  },

  _onChange: function() {
    this.setState(getAllPhuots());
  }

});

module.exports = PhuotComponents;
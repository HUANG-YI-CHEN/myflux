var React = require('react');
var MyAction = require('../actions/MyActions.js');
//var $ = require('jquery');


var Btn = React.createClass({

  getInitialState: function() {
   	return {
   		id :'add items'
   	}
  },
  render: function() {
  	return (
      <button onClick={this.props.onClick}>{this.state.id}</button>
    );
  }

});

module.exports = Btn;


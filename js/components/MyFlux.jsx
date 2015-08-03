var React = require('react');
var List = require('./List');
var Btn = require('./btn');
var MyAction = require('../actions/MyActions');


var MyFlux = React.createClass({

    render: function(){
        return (
            <div className='MyFlux'>
            	<Btn onClick={this.handleClick} />
            	<List />
            </div>
        );
    },

    handleClick: function(){
  		MyAction.create("新增物品");
  	}

});

module.exports = MyFlux;


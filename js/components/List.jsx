var React = require('react');
var MyStores = require('../stores/MyStores.js');


function getData(){
	return {
		data: MyStores.getAll()
	};
}


var List = React.createClass({


    getInitialState: function() {
        return getData();
    },

    componentDidMount: function(){
    	MyStores.addChangeListener(this.onChange);
    },

    render: function(){

    	var items = this.state.data.map(function(item) {
    		return (<li key={item.id}>{item.text}</li>);
    	});

        return (
            <ul>
            	{items}
            </ul>
        );
    },

    onChange: function(){
		this.setState( getData() );
    }

});






module.exports = List;
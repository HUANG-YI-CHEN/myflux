var React = require('react');


var MySection = React.createClass({


    render: function(){

    	var eles = [];

    	for (var i = 1; i < this.props.num; i++) 
    		eles.push( (<div className="blk">{i}</div>) );
    
        return (
            <div>{eles}</div>
        );
    }

});

module.exports = MySection;
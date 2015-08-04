var React = require('react');
var MyTitle = require('./MyTitle');
var MySection = require('./MySection');

var max = 10;
var min = 5;
var idx = 0;
var MyReact = React.createClass({

	getInitialState: function() {
        return {num:rand(max,min)}
    },

    componentDidMount: function() {
    	
    	changeState.bind(this).call(this);

		function changeState(){
			idx++;
			var num = rand(max,min);
			this.setState({
				num:num,
				idx:idx
			});
			setTimeout(changeState.bind(this),2000);
		}
		
    },

    render: function(){
        return (
        	<div>
           	 	<MyTitle num={this.state.num} idx={this.state.idx}/>
            	<MySection num={this.state.num}/>
            </div>
        );
    }

});


function rand(maximum,minimum){
	return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
}

module.exports = MyReact;




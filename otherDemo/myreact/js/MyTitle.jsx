var React = require('react');


var MyTitle = React.createClass({

    render: function(){
        return (
          	<h3>{this.props.idx} : {this.props.num}</h3>
        );
    }

});

module.exports = MyTitle;
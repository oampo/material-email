var React = require('react');
var mui = require('material-ui');

var FontIcon = mui.FontIcon;

var Icon = React.createClass({
    render: function() {
        return <FontIcon className="material-icons" {...this.props}>{this.props.name}</FontIcon>;
    }
});

module.exports = Icon;

var React = require('react');
var mui = require('material-ui');
var Toolbar = mui.Toolbar;
var ToolbarGroup = mui.ToolbarGroup;
var ToolbarTitle = mui.ToolbarTitle;
var IconButton = mui.IconButton;
var Colors = mui.Styles.Colors;

var ThreadToolbar = React.createClass({
    render: function() {
        return (
            <Toolbar style={{backgroundColor: Colors.blue200}}>
                <ToolbarGroup key={0}>
                    <ToolbarTitle text={this.props.title} />
                </ToolbarGroup>
                <ToolbarGroup key={1} float="right">
                    <IconButton iconClassName="material-icons" tooltip="Reply">
                        reply
                    </IconButton>
                    <IconButton iconClassName="material-icons" tooltip="Delete">
                        delete
                    </IconButton>
                </ToolbarGroup>
            </Toolbar>
        );
    }
});

module.exports = ThreadToolbar;

var React = require('react');
var mui = require('material-ui');
var List = mui.List;
var ListItem = mui.ListItem;
var Colors = mui.Styles.Colors;

var Icon = require('./icon');

var LeftMenu = React.createClass({
    render: function() {
        var style = {
            height: '100%'
        };
        return (
            <List className="left-menu" style={style}>
                <ListItem primaryText="Inbox"
                          leftIcon={<Icon name="inbox" />} />
                <ListItem primaryText="Starred"
                          leftIcon={<Icon name="star" />} />
                <ListItem primaryText="Sent mail"
                          leftIcon={<Icon name="email" />} />
                <ListItem primaryText="Drafts"
                          leftIcon={<Icon name="drafts" />} />
            </List>
        );
    }
});


module.exports = LeftMenu;

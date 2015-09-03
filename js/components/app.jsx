var React = require('react');
var mui = require('material-ui');
var ThemeManager = new mui.Styles.ThemeManager();
var LeftMenu = require('./left-menu');
var Thread = require('./thread');

var EXAMPLE_THREAD = {
    title: 'An example email thread',
    emails: [
        {
            id: 0,
            from: {
                name: "Ada Lovelace"
            },
            body: 'This is a test email'
        },
        {
            id: 1,
            from: {
                name: "Alan Turing"
            },
            body: 'This is a reply to your test email'
        },
    ]
};



var App = React.createClass({
    childContextTypes: {
        muiTheme:  React.PropTypes.object
    },

    getChildContext: function() {
        return {
            muiTheme: ThemeManager.getCurrentTheme()
        };
    },

    render: function() {
        return (
            <div className="main" style={{display: 'flex', height: '100%'}}>
                <LeftMenu />
                <Thread {...EXAMPLE_THREAD} />
            </div>
        );
    }
});

module.exports = App;

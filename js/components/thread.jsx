var React = require('react');
var mui = require('material-ui');
var Paper = mui.Paper;

var ThreadToolbar = require('./thread-toolbar');
var Email = require('./email');

var Thread = React.createClass({
    render: function() {
        var emails = this.props.emails.map(function(email) {
            return <Email from={email.from} body={email.body} key={email.id} />;
        });
        return (
            <Paper className="thread" style={{flex: 2}}>
                <ThreadToolbar title={this.props.title} />
                {emails}
            </Paper>
        );
    }
});

module.exports = Thread;

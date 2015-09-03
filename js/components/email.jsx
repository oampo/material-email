var React = require('react');
var mui = require('material-ui');
var Card = mui.Card;
var CardHeader = mui.CardHeader;
var CardText = mui.CardText;
var Avatar = mui.Avatar;

var Email = React.createClass({
    render: function() {
        var avatar;
        if (this.props.from.avatar) {
            avatar = <Avatar src={this.props.from.avatar} />;
        }
        else {
            avatar = (
                <Avatar>{this.props.from.name.charAt(0).toUpperCase()}</Avatar>
            );
        }
        return (
            <Card className="email" style={{marginTop: '20px',
                                            marginBottom: '20px'}}>
                <CardHeader title={this.props.from.name} avatar={avatar} />
                <CardText>
                    { this.props.body }
                </CardText>
            </Card>
        )
    }
});

module.exports = Email;

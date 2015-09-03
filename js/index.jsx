var React = require('react');
require("react-tap-event-plugin")();
var App = require('./components/app');


document.addEventListener('DOMContentLoaded', function() {
    React.render(<App />, document.body);
});


var React = require("react"),
    AppActions = require("../actions/app-actions.js"),
    Decrease = React.createClass({
        handleClick: function () {
            AppActions.decreaseItem(this.props.index);
        },
        render: function () {
            return <button onClick={this.handleClick}>-</button>
        }
    });

module.exports = Decrease;

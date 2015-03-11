var React = require("react"),
    AppActions = require("../actions/app-actions.js"),
    RemoveFromCart = React.createClass({
        handleClick: function () {
            AppActions.removeItem(this.props.index);
        },
        render: function () {
            return <button onClick={this.handleClick}>x</button>
        }
    });

module.exports = RemoveFromCart;

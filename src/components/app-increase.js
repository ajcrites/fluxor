var React = require("react"),
    AppActions = require("../actions/app-actions.js"),
    Increase = React.createClass({
        handleClick: function () {
            AppActions.increaseItem(this.props.index);
        },
        render: function () {
            return <button onClick={this.handleClick}>+</button>
        }
    });

module.exports = Increase;

var React = require("react"),
    AppActions = require("../actions/app-actions.js"),
    AddToCart = React.createClass({
        handleClick: function () {
            AppActions.addItem(this.props.item);
        },
        render: function () {
            return <button onClick={this.handleClick}>Add To cart</button>
        }
    });

module.exports = AddToCart;

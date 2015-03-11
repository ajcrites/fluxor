var React = require("react"),
    AppActions = require("../actions/app-actions"),
    Catalog = require("../components/app-catalog"),
    Cart = require("../components/app-cart"),
    APP = React.createClass({
        render: function () {
            return (
                <div>
                    <h1>Let's Shop</h1>
                    <Catalog />

                    <h1>Cart</h1>
                    <Cart />
                </div>
            )
        }
    });

module.exports = APP;

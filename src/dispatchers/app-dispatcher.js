var Dispatcher = require("./dispatcher"),
    _ = require("lodash"),
    AppDispatcher = _.extend(Dispatcher.prototype, {
        handleViewAction: function (action) {
            this.dispatch({
                src: "VIEW_ACTION",
                action: action,
            });
        },
    });

module.exports = AppDispatcher;

/* globals lang */
require("i18n/i18n.js"); // Generates global lang object

const Application = require("sf-core/application");

// Set uncaught exception handler, all exceptions that are not caught will
// trigger onUnhandledError callback.
Application.onUnhandledError = function(e) {
    alert({
        title: lang.applicationError,
        message: e.message + "\n\n*" + e.sourceURL + "\n*" + e.line + "\n*" + e.stack
    });
};

require("sf-extension-utils");
require("./theme");

const Router = require("sf-core/ui/router");
const Network = require("sf-core/device/network");

var sliderDrawer = require("./sliderDrawer").self;
var notifier = new Network.createNotifier();

notifier.subscribe((connectionType) => {
    if (connectionType === Network.ConnectionType.NONE) {
        alert("No Network Connection");
    }
});

Router.add("login", require("./pages/login"));
Router.add("dashboard", require("./pages/dashboard"));
Router.add("second", require("./pages/second"));
Router.go("login");
Router.sliderDrawer = sliderDrawer;

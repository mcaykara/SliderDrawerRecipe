const Router = require("sf-core/ui/router");
const extend = require('js-base/core/extend');
const LoginDesign = require('ui/ui_login');

const Login = extend(LoginDesign)(
    // Constructor
    function(_super) {
        // Initalizes super class for this page scope
        _super(this);
        // Overrides super.onShow method
        this.onShow = onShow.bind(this, this.onShow.bind(this));
        // Overrides super.onLoad method
        this.onLoad = onLoad.bind(this, this.onLoad.bind(this));
        this.btnLogin.onPress = performLogin.bind(this);
    });

/**
 * @event onShow
 * This event is called when a page appears on the screen (everytime).
 * @param {function} superOnShow super onShow function
 * @param {Object} parameters passed from Router.go function
 */
function onShow(superOnShow) {
    superOnShow();
}

/**
 * @event onLoad
 * This event is called once when page is created.
 * @param {function} superOnLoad super onLoad function
 */
function onLoad(superOnLoad) {
    superOnLoad();
    Router.sliderDrawer.enabled = false;
}

function performLogin() {
    const page = this;
    var username = page.tbUsername.text;
    var password = page.tbPassword.text;
    if (!username) {
        return alert("No username provided");
    }
    else if (!password) {
        return alert("No password provided");
    }
    require("../sliderDrawer").ui.user = username;
    Router.go("dashboard", { user: username });
}

module.exports = Login;

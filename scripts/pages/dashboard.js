const Router = require("sf-core/ui/router");
const extend = require('js-base/core/extend');
const DashboardDesign = require('ui/ui_dashboard');

const Dashboard = extend(DashboardDesign)(
    // Constructor
    function(_super) {
        // Initalizes super class for this page scope
        _super(this);
        // Overrides super.onShow method
        this.onShow = onShow.bind(this, this.onShow.bind(this));
        // Overrides super.onLoad method
        this.onLoad = onLoad.bind(this, this.onLoad.bind(this));
    });

/**
 * @event onShow
 * This event is called when a page appears on the screen (everytime).
 * @param {function} superOnShow super onShow function
 * @param {Object} parameters passed from Router.go function
 */
function onShow(superOnShow, e) {
    superOnShow();
    const page = this;
    if (!e)
        return;
    var user = e.user;
    page.headerBar.title = `${user} Dashboard`;
}

/**
 * @event onLoad
 * This event is called once when page is created.
 * @param {function} superOnLoad super onLoad function
 */
function onLoad(superOnLoad) {
    superOnLoad();
    const page = this;
    Router.sliderDrawer.enabled = true;
    page.headerBar.leftItemEnabled = false;
}

module.exports = Dashboard;

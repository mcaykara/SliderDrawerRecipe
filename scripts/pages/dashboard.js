const extend = require('js-base/core/extend');
const DashboardDesign = require('ui/ui_dashboard');
const Application = require("sf-core/application");


const Dashboard = extend(DashboardDesign)(
    // Constructor
    function(_super, routeData) {
        // Initalizes super class for this page scope
        _super(this);
        this.routeData = routeData;
        // Overrides super.onShow method
        this.onShow = onShow.bind(this, this.onShow.bind(this));
        // Overrides super.onLoad method
        this.onLoad = onLoad.bind(this, this.onLoad.bind(this));
    });

/**
 * @event onShow
 * This event is called when a page appears on the screen (everytime).
 * @param {function} superOnShow super onShow function
 */
function onShow(superOnShow) {
    superOnShow();
    const page = this;
    if (!page.routeData)
        return;
    var user = page.routeData.user;
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
    Application.sliderDrawer.enabled = true;
    page.headerBar.leftItemEnabled = false;
}

module.exports = Dashboard;

const Router = require("sf-core/ui/router");
const componentContextPatch = require("@smartface/contx/lib/smartface/componentContextPatch");
const extend = require('js-base/core/extend');
const SliderDrawerDesign = require('library/SliderDrawer');

const SliderDrawer = extend(SliderDrawerDesign)(
    // Constructor
    function(_super, props, pageName) {
        // Initalizes super class for this scope
        _super(this, props || {});
        this.pageName = pageName;

        // This is important, connect SliderDrawer object to context
        componentContextPatch(this, "sliderDrawer");

        var user = "";
        Object.defineProperty(this, "user", {
            configurable: false,
            enumerable: true,
            get: function() {
                return user;
            },
            set: function(value) {
                user = value;
                var isAdmin = user.toLowerCase() === "admin";
                this.btnDashboard.text = `    ${isAdmin ? "Admin" : user} Dashboard`;
                this.btnSecondPage.text = `    ${isAdmin ? "Admin" : user} Second Page`;
                this.btnDashboard.onPress = _ => {
                    Router.go("dashboard", { user });
                    Router.sliderDrawer.hide();
                };
                this.btnSecondPage.onPress = _ => {
                    Router.go("second", { user });
                    Router.sliderDrawer.hide();
                };
            }
        });
    }
);

module.exports = SliderDrawer;

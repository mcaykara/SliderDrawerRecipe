const SliderDrawer = require('sf-core/ui/sliderdrawer');
const SliderDrawerUI = require("./components/SliderDrawer");

var sliderDrawer = new SliderDrawer({
    width: 250,
    onLoad: function() {
        // Adjust safe area for iOS
        if (this.ios) {
            this.ios.onSafeAreaPaddingChange = safeArea => {
                sliderDrawerUI.dispatch({
                    type: "updateUserStyle",
                    userStyle: {
                        paddingTop: safeArea.top
                    }
                });
            };
        }
    }
});

var sliderDrawerUI = new SliderDrawerUI();
sliderDrawer.layout.addChild(sliderDrawerUI);

module.exports = {
    self: sliderDrawer,
    ui: sliderDrawerUI
};

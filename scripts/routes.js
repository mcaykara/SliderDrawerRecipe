const {
    NativeRouter: Router,
    NativeStackRouter: StackRouter,
    Route
} = require("@smartface/router");

const router = Router.of({
    path: "/",
    isRoot: true,
    routes: [
        StackRouter.of({
            path: "/stack",
            headerBarParams: () => { ios: { translucent: true } },
            routes: [
                Route.of({
                    path: "/stack/login",
                    build: (router, route) => {
                        let Login = require("pages/login");
                        return new Login(router);
                    },
                    routes: [
                        Route.of({
                            path: '/stack/login/dashboard',
                            build: (router, route) => {
                                let Dashboard = require("pages/dashboard");
                                let routeData = route.getState().routeData;
                                return new Dashboard(routeData);
                            }
                        }),
                        Route.of({
                            path: '/stack/login/second',
                            build: (router, route) => {
                                let Second = require("pages/second");
                                let routeData = route.getState().routeData;
                                return new Second(routeData);
                            }
                        })
                    ]
                })
            ]
        })
    ]
});


router.push("/stack/login");

module.exports = router;
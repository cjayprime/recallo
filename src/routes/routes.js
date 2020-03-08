import Admin from "../views/Admin/admin";
import Home from "../views/home";
import Calls from "../views/Calls";
import Personnel from "../views/Personnel";
import Analytics from "../views/Analytics";

import homeIcon from "../assets/img/homeIcon.svg";

var routes = {
    publicRoutes: [

    ],
    privateRoutes: [
        {
            path: "/admin",
            component: Admin
        },
        {
            path: "/home",
            exact: true,
            component: Home,
            name: "Home",
            layout: "/admin",
            icon: homeIcon
        },
        {
            path: "/calls",
            exact: true,
            component: Calls,
            name: "Calls",
            layout: "/admin",
            icon: homeIcon
        },
        {
            path: "/personnel",
            exact: true,
            component: Personnel,
            name: "Personnel",
            layout: "/admin",
            icon: homeIcon
        },
        {
            path: "/analytics",
            exact: true,
            component: Analytics,
            name: "Analytics",
            layout: "/admin",
            icon: homeIcon
        }
    ]
}

export default routes;
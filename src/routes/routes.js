import Admin from "../views/Admin/admin";
import Home from "../views/Home/home";
import Calls from "../views/Calls";
import Personnel from "../views/Personnel";
import Analytics from "../views/Analytics";

import homeIcon from "../assets/img/homeIcon.svg";
import ManageAccount from "../views/Settings";
import PreviousCall from "../views/PreviousCall";
import VoiceNotes from "../views/Voicenotes";

var routes = {
    publicRoutes: [

    ],
    privateRoutes: {
        sidebar: [
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
        ],
        route: [
            {
                path: "/settings",
                exact: true,
                component: ManageAccount,
                layout: "/admin"
            },
            {
                path: "/previous",
                exact: true,
                component: PreviousCall,
                layout: "/admin"
            }, {
                path: "/voicenotes",
                exact: true,
                component: VoiceNotes,
                layout: "/admin"
            }
        ]
    }
};

export default routes;
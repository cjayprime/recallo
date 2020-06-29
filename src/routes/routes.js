import React from "react";
import { Redirect } from "react-router-dom";

// Public routes components
import Signin from "./AuthScreen/SignIn";
import SignUp from "./AuthScreen/Signup";
import Support from "./Support";

// Private routes components
import Admin from "./Admin";
import Home from "./Home/home";
import Calls from "./Calls";
import Contact from "./Contact";
import Personnel from "./Personnel";
import Analytics from "./Analytics";
import Settings from "./Settings";
import CallsID from "./CallsID";
import NumberDetails from "./NumberDetails";
import VoiceNotes from "./Voicenotes";
import AccountPlan from "./Settings/AccountPlan"

// import homeIcon from "../assets/img/homeIcon.svg";
// import contactBook from "../assets/img/contactbook.svg";

const routes = {
  public: [
    {
      path: "/signin",
      component: Signin,
    },
    {
      path: "/signup",
      component: SignUp,
    },
    {
      path: "/support",
      component: Support,
    },
  ],
  private: {
    admin: Admin,
    sidebar: [
      {
        path: "/admin/home",
        component: Home,
      },
      {
        path: "/admin/calls",
        exact: true,
        component: Calls,
      },
      {
        path: "/admin/calls/:id",
        component: CallsID,
      },
      {
        path: "/admim/contact",
        component: Contact,
      },
      {
        path: "/admin/personnel",
        component: Personnel,
      },
      {
        path: "/admin/analytics",
        component: Analytics,
      },
    ],
    route: [
      {
        path: "/settings",
        exact: true,
        component: Settings,
        layout: "/admin",
      },
      {
        path: "/account-plan",
        exact: true,
        component: AccountPlan,
        layout: "/admin",
      },
      {
        path: "/number-details",
        exact: true,
        component: NumberDetails,
        layout: "/admin",
      },
      {
        path: "/voicenotes",
        exact: true,
        component: VoiceNotes,
        layout: "/admin",
      },
      {
        path: "/signout",
        exact: true,
        component: () => <Redirect to={{ pathname: "/signin", state: {} }} />,
      },
    ],
  },
};

export default routes;

import React from "react";
import { Redirect } from "react-router-dom";

// Public routes components
import Signin from "./AuthScreen/SignIn";
import SignUp from "./AuthScreen/Signup";
import ContactSupport from "./ContactSupport";

// Private routes components
import Admin from "./Admin/admin";
import Home from "./Home/home";
import Calls from "./Calls";
import Contact from "./Contact";
import Personnel from "./Personnel";
import Analytics from "./Analytics";
import Settings from "./Settings";
import ProfileCall from "./ProfileCall";
import NumberDetails from "./NumberDetails";
import VoiceNotes from "./Voicenotes";
import AccountPlan from "./Settings/AccountPlan"

import homeIcon from "../assets/img/homeIcon.svg";
import contactBook from "../assets/img/contactbook.svg";

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
      component: ContactSupport,
    },
  ],
  private: {
    sidebar: [
      {
        path: "/admin",
        component: Admin,
      },
      {
        path: "/home",
        exact: true,
        component: Home,
        name: "Home",
        layout: "/admin",
        icon: homeIcon,
      },
      {
        path: "/calls",
        exact: true,
        component: Calls,
        name: "Calls",
        layout: "/admin",
        icon: homeIcon,
      },
      {
        path: "/contact",
        exact: true,
        component: Contact,
        name: "Contact",
        layout: "/admin",
        icon: contactBook,
      },
      {
        path: "/personnel",
        exact: true,
        component: Personnel,
        name: "Personnel",
        layout: "/admin",
        icon: homeIcon,
      },
  
      {
        path: "/analytics",
        exact: true,
        component: Analytics,
        name: "Analytics",
        layout: "/admin",
        icon: homeIcon,
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
        path: "/profile-calls",
        exact: true,
        component: ProfileCall,
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

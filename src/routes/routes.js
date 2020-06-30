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

//import homeIcon from "../assets/img/homeIcon.svg";
//import contactBook from "../assets/img/contactbook.svg";

const routes = {
  public: [
    {
      path: "/signin",
      exact: true,
      component: Signin,
      name: "Log In",
    },
    {
      path: "/signup",
      exact: true,
      component: SignUp,
      name: "Create an Account",
    },
    {
      path: "/support",
      exact: true,
      component: ContactSupport,
      name: "Contact Support",
    },

/*
    {
      path: "/admin/settings",
      exact: true,
      component: Settings,
      name: "Settings",
    },

    {
      path: "/admin/account-plan",
      exact: true,
      component: AccountPlan,
      name: "Account Plan",
    },
*/
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
         layout: "/admin", 
      },
      {
        path: "/calls",
        exact: true,
        component: Calls,
         layout: "/admin",
      },
      {
        path: "/contact",
        exact: true,
        component: Contact,
         layout: "/admin",
      },
      {
        path: "/personnel",
        exact: true,
        component: Personnel,
         layout: "/admin",
      },
  
      {
        path: "/analytics",
        exact: true,
        component: Analytics,
        layout: "/admin",
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

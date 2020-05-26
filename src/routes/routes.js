import React from "react"
import { Redirect } from "react-router-dom"

// Public routes components
import SigninContainer from "./AuthScreen/SignIn"
import SignUpContainer from "./AuthScreen/Signup"
import ContactSupportComponent from "./ContactSupport"

// Private routes components
import Admin from "./Admin/admin"
import Home from "./Home/home"
import Calls from "./Calls"
import Personnel from "./Personnel"
import Analytics from "./Analytics"
import ManageAccount from "./Settings"
import PreviousCall from "./PreviousCall"
import VoiceNotes from "./Voicenotes"

import homeIcon from "../assets/img/homeIcon.svg"

const routes = {
  public: [
    {
      path: "/signin",
      exact: true,
      component: SigninContainer,
      name: "Log In",
    },
    {
      path: "/signup",
      exact: true,
      component: SignUpContainer,
      name: "Create an Account",
    },
    {
      path: "/support",
      exact: true,
      component: ContactSupportComponent,
      name: "Contact Support",
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
        component: ManageAccount,
        layout: "/admin",
      },
      {
        path: "/previous",
        exact: true,
        component: PreviousCall,
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
}

export default routes

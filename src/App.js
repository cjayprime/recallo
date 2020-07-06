import React from "react";
import Provider from "react-redux/es/components/Provider";
import { SnackbarProvider } from "notistack";
import Button from "@material-ui/core/Button";

import "./assets/styles/main.css";
import Routes from "./routes";

import store from "./store";

import Notification from "./utils/notification";

function App() {
  return (
    <div>
      <Provider store={store}>
        <SnackbarProvider
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          ref={Notification.reference}
          action={(key) => <Button onClick={() => Notification.close(key)}>dismiss</Button>}
        >
          <Routes />
        </SnackbarProvider>
      </Provider>
    </div>
  );
}

export default App;

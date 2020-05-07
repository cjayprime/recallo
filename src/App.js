import React from 'react';
import Provider from "react-redux/es/components/Provider";
import { SnackbarProvider } from "notistack";
import Button from '@material-ui/core/Button';

import "../src/assets/styles/main.css"
import MainRoutes from "./Routes/routes";

import store from "./store";

const notistackRef = React.createRef();
const onClickDismiss = key => () => {
  notistackRef.current.closeSnackbar(key);
}

function App() {
  return (
    <div>
      <Provider store={store}>
        <SnackbarProvider
          ref={notistackRef}
          action={(key) => (
            <Button onClick={onClickDismiss(key)}>
              'Dismiss'
            </Button>
          )}
        >
          <MainRoutes />
        </SnackbarProvider>
      </Provider>
    </div>
  );
}

export default App;

import React from 'react';
import Provider from "react-redux/es/components/Provider";

import "../src/assets/styles/main.css"
import MainRoutes from "./Routes/Routes"

import store from "./store"

function App() {
  return (
    <div>
      <Provider store={store}>
        <MainRoutes />
      </Provider>
    </div>
  );
}

export default App;

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";
import { Provider } from "react-redux";
import deletereducer from "./reducers/deleteReducer";
import { loadState, saveState } from "./localstorage";

const persistedState = loadState();
const astore = createStore(deletereducer, persistedState);

astore.subscribe(() => {
  saveState({
    existingTasks: astore.getState().existingTasks,
  });
});
ReactDOM.render(
  <React.StrictMode>
    <Provider store={astore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();

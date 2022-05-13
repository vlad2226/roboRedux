import React from "react";
import { render } from "react-dom";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/App";
import registerServiceWorker from "./registerServiceWorker";
import { Provider, connect } from "react-redux";
import { createStore } from "redux";
import { searchRobotsReducer } from "./reducers";
import "tachyons";

const store = createStore(rootReducer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

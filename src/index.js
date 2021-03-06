import React from "react";
import ReactDOM from "react-dom";
// import { HashRouter as Router, Route } from "react-router-dom";
import App from "./App";
// import Settings from "./components/Settings";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  // <Router>
  //   <Route path="/" exact component={App} />
  //   <Route path="/settings" component={Settings} />
  // </Router>
  <App />,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

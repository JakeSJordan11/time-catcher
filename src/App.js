import React from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import GlobalStyles from "./styled-components/GlobalStyles";
import About from "./components/About";
import Home from "./components/Home";
import Settings from "./components/Settings";

const App = () => {
  return (
    <>
      <GlobalStyles />
      {/* <Link to="Home">Home</Link> */}
      <Link to="About">About</Link>
      <Link to="Settings">Settings</Link>
      <Router>
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/settings" component={Settings} />
      </Router>
      <button>exit</button>
    </>
  );
};

export default App;

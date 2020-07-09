import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./Home";
import FindDonor from "./FindDonor";
import SignIn from "../screens/SignIn";
import Registration from "../registration";
import "../Style.css";

const App = () => {
  return (
    <>
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/registration" component={Registration} />
        <Route exact path="/find-donor" component={FindDonor} />
      </Router>
    </>
  );
};
export default App;

import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
// import Home from "./Components/Home";
// import Page1 from "./Components/Page1";
// import Page2 from "./Components/Page2";
// import Page3 from "./Components/Page3";
import AdminLogIn from "./Components/AdminLogIn";
import LandingPage from "./Components/LandingPage";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/AdminLogIn" component={AdminLogIn} />
      </BrowserRouter>
    );
  }
}

export default App;

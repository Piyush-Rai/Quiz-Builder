import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
// import Home from "./Components/Home";
// import Page1 from "./Components/Page1";
// import Page2 from "./Components/Page2";
// import Page3 from "./Components/Page3";
// import MyAccount from "./Components/MyAccount";
import LandingPage from "./Components/LandingPage";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={LandingPage} />
      </BrowserRouter>
    );
  }
}

export default App;

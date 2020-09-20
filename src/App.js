import React, { Component } from "react";
import {
  BrowserRouter as Switch,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import { Home } from "./components/Home";
import Footer from "./components/Footer";
import "./scss/default.scss";

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Home} />
          </Switch>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

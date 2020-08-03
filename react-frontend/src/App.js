import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Smokers from "./components/smokers";
import Recipes from "./components/rubs_sauces";
import Meats from "./containers/meats";

class App extends Component {
  render() {
    return (
      <div>
        <div className="login">
          <h3>
            <button>Login</button> <button>Signup</button>
          </h3>
          <h1 className="App-title">Guru BBQ</h1>
        </div>
        <div>
          <Router>
            <nav>
              <h3 className="buttons">
                <Link to="/Smokers">
                  <button className="button">Smokers</button>
                </Link>
                <Link to="/Meats">
                  <button className="button">Meats</button>
                </Link>
                <Link to="/Rubs&Sauces">
                  <button className="button">Rubs / Sauces</button>
                </Link>
              </h3>
            </nav>
            <Switch>
              <Route path="/Smokers">
                <Smokers />
              </Route>
              <Route path="/Meats">
                <Meats />
              </Route>
              <Route path="/Rubs&Sauces">
                <Recipes />
              </Route>
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;

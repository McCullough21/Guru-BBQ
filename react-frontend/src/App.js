import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Smokers from "./components/smokers";

class App extends Component {
  render() {
    return (
      <div className="App-header">
        <h1>Guru BBQ</h1>
        <Router>
          <nav>
            <h3>
              <Link to="/Smokers">
                <button className="buttons">Smokers</button>
              </Link>
              <button className="buttons">Meats</button>{" "}
              <button className="buttons">Rubs / Sauces</button>{" "}
            </h3>
          </nav>
          <Switch>
            <Route path="/Smokers">
              <Smokers />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

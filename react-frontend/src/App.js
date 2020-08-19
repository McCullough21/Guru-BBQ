import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Smokers from "./components/smokers";
import Recipes from "./components/rubs_sauces";
import Meats from "./containers/meats";
import User from "./containers/User";
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <div>
        <div className="login">
          <Router>
            <h3>
              <Link to="/Login">
                <button>Login</button>
              </Link>
              <Link to="/Signup">
                <button>Signup</button>
              </Link>
            </h3>
            <Switch>
              <Route path="/Login">
                <User type="Login" />
              </Route>
              <Route path="/Signup">
                <User type="Sign-up" />
              </Route>
            </Switch>
          </Router>
          <h1 className="App-title">Guru BBQ</h1>
          <br></br>
          <h3>{this.props.user.username}</h3>
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

const mapStateToProps = state => {
  console.log(state);
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(App);

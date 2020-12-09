import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Smokers from "./components/smokers";
import Recipes from "./components/rubs_sauces";
import Meats from "./containers/meats";
import User from "./containers/User";
import { connect } from "react-redux";

class App extends Component {
  logout = () => {
    this.props.dispatch({ type: "LOGOUT" });
  };

  render() {
    return (
      <>
        <div>
          <Router>
            <div className="bg-gray-100 px-1 py-1">
              <h3 style={{ display: "table", height: "20px", width: "100%" }}>
                <Link to="/Login">
                  <button className="bg-indigo-600 w-36 h-15 rounded text-white m-1.5">
                    Login
                  </button>
                </Link>
                <Link to="/Signup">
                  <button className="bg-indigo-600 w-36 h-15 rounded text-white m-1.5">
                    Signup
                  </button>
                </Link>
                <button
                  className="bg-yellow-800 w-36 h-15 rounded text-white m-1.5 float-right"
                  onClick={this.logout}
                >
                  Logout
                </button>
              </h3>
              <h3 style={{ textAlign: "right", marginRight: "10%" }}>
                {this.props.user.username
                  ? `User: ${this.props.user.username}`
                  : ""}
              </h3>
            </div>
            <Link to="/">
              <h1 className="text-center font-serif text-6xl text-gray-600 ">
                Guru BBQ
              </h1>
            </Link>
            <br></br>
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

            <Switch>
              <Route path="/Login">
                <User actionType="Login" />
              </Route>
              <Route path="/Signup">
                <User actionType="Sign-up" />
              </Route>
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
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(App);

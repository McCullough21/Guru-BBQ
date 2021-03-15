import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Smokers from "./components/smokers";
import Recipes from "./components/rubs_sauces";
import Meats from "./containers/meats";
import User from "./containers/User";
import { connect } from "react-redux";
import logo from "./assets/logo.png";

class App extends Component {
  logout = () => {
    this.props.dispatch({ type: "LOGOUT" });
  };

  render() {
    return (
      <>
        <div className="pb-20">
          <Router>
            <div className="py-2">
              {!this.props.user.username ? (
                <h3 className="pl-4">
                  <Link to="/Login">
                    <button className="bg-red-500 w-36 h-15 rounded text-white m-1.5">
                      Login
                    </button>
                  </Link>
                  <Link to="/Signup">
                    <button className="bg-red-500 w-36 h-15 rounded text-white m-1.5">
                      Signup
                    </button>
                  </Link>
                </h3>
              ) : (
                <h3>
                  <button
                    className="bg-yellow-800 w-36 h-15 rounded text-white m-1.5 float-right"
                    onClick={this.logout}
                  >
                    Logout
                  </button>
                </h3>
              )}

              <h3 className="float-left text-base font-serif italic pl-10 pt-2 text-gray-400">
                {this.props.user.username
                  ? `Welcome: ${this.props.user.username}`
                  : ""}
              </h3>
            </div>
            <div className="flex h-full relative justify-center">
              <Link to="/">
                <img alt="title" src={logo} />
              </Link>
            </div>

            <div className="bg-yellow-600 py-5 bg-opacity-50">
              <h3 className="flex justify-around w-100% mx-40">
                <Link to="/Smokers">
                  <button className="bg-gray-100 w-60 h-25 items-center py-3 border border-gray-300 rounded-md shadow-sm text-sm text-gray-700 hover:bg-gray-50 hover:opacity-100 focus:opacity-100  focus:ring-4 focus:ring-red-900 focus:outline-none focus:ring-opacity-50 opacity-80 text-2xl mx-1">
                    Smokers
                  </button>
                </Link>
                <Link to="/Meats">
                  <button className="bg-gray-100  w-60 h-25 items-center  py-3 border border-gray-300 rounded-md shadow-sm text-sm text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-red-900 focus:outline-none focus:ring-opacity-50 hover:opacity-100 focus:opacity-100 opacity-80 text-2xl mx-1">
                    Meats
                  </button>
                </Link>
                <Link to="/Rubs&Sauces">
                  <button className="bg-gray-100  w-60 h-25 items-center py-3 border border-gray-300 rounded-md shadow-sm text-sm text-gray-700 hover:bg-gray-50 hover:opacity-100 focus:opacity-100 focus:ring-4 focus:ring-red-900 focus:outline-none focus:ring-opacity-50 opacity-80 text-2xl mx-1">
                    Rubs / Sauces
                  </button>
                </Link>
              </h3>
            </div>

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

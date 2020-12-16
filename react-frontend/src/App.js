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
              <h1 className="text-center font-serif text-7xl text-gray-600 ">
                Guru BBQ
              </h1>
            </Link>
            <br></br>
            <div className="bg-yellow-600 py-5 bg-opacity-50">
              <h3 className="flex justify-around w-100% mx-40">
                <Link to="/Smokers">
                  <button className="bg-gray-100  flex-intial w-60 h-25 items-center py-3 border border-gray-300 rounded-md shadow-sm text-sm text-gray-700 hover:bg-gray-50 hover:opacity-100 focus:opacity-100 focus:ring-indigo-500 opacity-80 text-2xl">
                    Smokers
                  </button>
                </Link>
                <Link to="/Meats">
                  <button className="bg-gray-100  w-60 h-25 items-center  py-3 border border-gray-300 rounded-md shadow-sm text-sm text-gray-700 hover:bg-gray-50 focus:ring-indigo-500 hover:opacity-100 focus:opacity-100 opacity-80 text-2xl">
                    Meats
                  </button>
                </Link>
                <Link to="/Rubs&Sauces">
                  <button className="bg-gray-100  w-60 h-25 items-center py-3 border border-gray-300 rounded-md shadow-sm text-sm text-gray-700 hover:bg-gray-50 hover:opacity-100 focus:opacity-100 focus:ring-indigo-500 opacity-80 text-2xl">
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

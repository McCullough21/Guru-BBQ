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
            <div className="py-2">
              <h3>
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
            <div className="flex justify-center w-full">
              <Link to="/">
                <img
                  alt="title"
                  src="https://lh3.googleusercontent.com/mq7lh-FztIynAUDkWhUInj6aad7htCXU2XxpiRbOkAHCmzeLtXEB6VI5Cp9x7ALjotg9dEfK2GSSWF2Ag-8adJaLoGGkvxILag4iD16NpytNdTrr-Ls0TD6GjaJjrm7ZLaGw5uU0DP95LGVwNSQs9kE8q_pPAZR7ChO0pQ1W2U6hZrVMGkegqC1xNAKkf3GxC8DzlQGgh8qgsWZ6b1nYKT_au4ZF2kx1BVDlow1JgVJVZ7wy5VoTSQal5F9TdQ0gVWG4bSoj0Dz8IlUv8rR61htNzQOrudZWNOotSJRa__hNPxD1_uGyCF1KkOTNkC2sWzXQk4-cGxC0ZxStCOopSiZ414EHCDfK6WeQXa9bZuxVnC2OIFJfQBGSWp3x4AT0TQTQjXQdw8AAe_QdP1G1Ellmu0MR0UH72HxmoUMuOWigSZSrUDhS9WgPzBMDPvbvhju-_jVZU_OjxBdTTFH3r5RLTkmLMM6121eeObl9wsjLlW-jMWrgY4weDZbodTuN0AIZaL4UJgMonEwPFF25hdG-ZX6aKPkldW0jhTiVHzZPG_hELx3ejG5uMKGt7iggw1Mi5zrG1FX57pDhTQVSkffgo5jOn-5oaCHKB_MbTmU9KL9HWDU7ruzR19rdzb-W-uBJYMJRGVADXHsMr--bMXByiktCja7IxjWMnKdOuPwk2SzjYUYUJQ=w410-h174-no?authuser=0"
                />
              </Link>
            </div>

            <div className="bg-yellow-600 py-5 bg-opacity-50">
              <h3 className="flex justify-around w-100% mx-40">
                <Link to="/Smokers">
                  <button className="bg-gray-100 w-60 h-25 items-center py-3 border border-gray-300 rounded-md shadow-sm text-sm text-gray-700 hover:bg-gray-50 hover:opacity-100 focus:opacity-100  focus:ring-4 focus:ring-red-900 focus:outline-none focus:ring-opacity-50 opacity-80 text-2xl">
                    Smokers
                  </button>
                </Link>
                <Link to="/Meats">
                  <button className="bg-gray-100  w-60 h-25 items-center  py-3 border border-gray-300 rounded-md shadow-sm text-sm text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-red-900 focus:outline-none focus:ring-opacity-50 hover:opacity-100 focus:opacity-100 opacity-80 text-2xl">
                    Meats
                  </button>
                </Link>
                <Link to="/Rubs&Sauces">
                  <button className="bg-gray-100  w-60 h-25 items-center py-3 border border-gray-300 rounded-md shadow-sm text-sm text-gray-700 hover:bg-gray-50 hover:opacity-100 focus:opacity-100 focus:ring-4 focus:ring-red-900 focus:outline-none focus:ring-opacity-50 opacity-80 text-2xl">
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

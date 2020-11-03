import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Smokers from "./components/smokers";
import Recipes from "./components/rubs_sauces";
import Meats from "./containers/meats";
import User from "./containers/User";
import { connect } from "react-redux";
// AIzaSyBNxh59of4YTZtcCyz7O1qD99HfozZ5BNs google api key
// Going to incorporate GOOGLE API for users to enter in their zipcode and
// receive first 3 bbq restaurants near them

// const y = () => {
//   fetch(
//     "https://www.googleapis.com/customsearch/v1?key=AIzaSyBNxh59of4YTZtcCyz7O1qD99HfozZ5BNs&cx=a853ea462f3b9dbe2:omuauf_lfve&q=BBQ"
//   )
//     .then(resp => resp.json())
//     .then(json => console.log(json))
//     .catch(error => console.log(error));
// };

class App extends Component {
  logout = () => {
    this.props.dispatch({ type: "LOGOUT" });
  };

  render() {
    return (
      <>
        <div>
          <Router>
            <div className="login">
              <h3 style={{ display: "table", height: "20px", width: "100%" }}>
                <Link to="/Login">
                  <button>Login</button>
                </Link>
                <Link to="/Signup">
                  <button>Signup</button>
                </Link>
                <button
                  className="logout"
                  onClick={this.logout}
                  style={{ float: "right" }}
                >
                  Logout
                </button>
              </h3>
              <h3 style={{ textAlign: "right", marginRight: "10%" }}>
                {this.props.user.username}
              </h3>
              <h1 className="App-title">Guru BBQ</h1>
            </div>
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
  console.log(state);
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(App);

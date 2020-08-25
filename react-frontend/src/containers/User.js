import React from "react";
import { userSignup } from "../actions/fetch";
import { userLogin } from "../actions/fetch";
import { connect } from "react-redux";

class User extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    console.log(this.props.type);
    event.preventDefault();
    // let username = this.state.username;
    // let password = this.state.password;
    if (this.props.type === "Login") {
      this.props.Login(this.state.username, this.state.password);
    } else {
      this.props.Signup(this.state.username, this.state.password);
    }
    this.setState({
      username: "",
      password: ""
    });
  };

  render() {
    return (
      <div>
        <form
          onSubmit={event => {
            this.handleSubmit(event);
          }}
        >
          <label>
            Username:
            <input
              type="text"
              name="username"
              onChange={event => this.handleChange(event)}
            />
          </label>
          <br></br>
          <label>
            Password:
            <input
              type="text"
              name="password"
              onChange={event => this.handleChange(event)}
            />
          </label>
          <br></br>
          <input type="submit" value={this.props.type} />
        </form>
      </div>
    );
  }
}
// login signup, map state to props, if logged in redirect.  dispatch on promise form signup

const mapDispatchToProps = dispatch => {
  return {
    Login: (username, password) => dispatch(userLogin(username, password)),
    Signup: (username, password) => dispatch(userSignup(username, password))
  };
};

export default connect(null, mapDispatchToProps)(User);

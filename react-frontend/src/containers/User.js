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
    console.log(this.props.type);
    console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    console.log(this.props.type);
    event.preventDefault();
    let username = this.state.username;
    let password = this.state.password;
    // event.preventDefault();
    if (this.props.type === "Sign-up") {
      userSignup(username, password);
    } else {
      this.props.userLogin(username, password);
    }
    this.setState({
      username: "",
      password: ""
    });

    // add action fetch here with params.
    // onSignup maybe populate user in store, else login
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

const mapDispatchToProps = dispatch => {
  return {
    userLogin: () => dispatch(userLogin())
  };
};

export default connect(null, mapDispatchToProps)(User);

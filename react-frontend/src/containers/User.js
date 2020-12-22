import React from "react";
import { userSignup } from "../actions/fetch";
import { userLogin } from "../actions/fetch";
import { connect } from "react-redux";

class User extends React.Component {
  constructor(props) {
    super(props);
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
    console.log(this.props.actionType);
    event.preventDefault();
    if (this.props.actionType === "Login") {
      this.props.Login(this.state.username, this.state.password);
    } else {
      this.props.Signup(this.state.username, this.state.password);
    }
    this.setState({
      username: "",
      password: ""
    });
  };

  displayError = () => {
    if (this.props.error) {
      return this.props.error;
    }
  };

  render() {
    return (
      <div>
        <p style={{ color: "red" }}>{this.displayError()}</p>
        <form
          onSubmit={event => {
            this.handleSubmit(event);
          }}
          className="m-5"
        >
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={event => this.handleChange(event)}
              className="w-50 px-3 py-2 border m-2 rounded border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Username"
            />
          </label>
          <br></br>
          <label>
            Password:
            <input
              type="text"
              name="password"
              value={this.state.password}
              onChange={event => this.handleChange(event)}
              className="w-50 px-3 py-2 border m-2 border-gray-300 rounded placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Password"
            />
          </label>
          <br></br>
          <input
            type="submit"
            value={this.props.actionType}
            className="ml-1 bg-white py-2 px-3 border border-gray-300 rounded shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    Login: (username, password) => dispatch(userLogin(username, password)),
    Signup: (username, password) => dispatch(userSignup(username, password))
  };
};

const mapStateToProps = state => {
  return {
    error: state.error
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);

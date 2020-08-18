import React from "react";

class User extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      password: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    // add action fetch here with params.
    // onSignup maybe populate user in store, else login
  };
  render() {
    return (
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <label for="name">Username:</label>
          <input
            type="text"
            name="name"
            onChange={event => this.handleChange(event)}
          />
          <br></br>
          <label for="password">Password:</label>
          <input
            type="text"
            name="password"
            onChange={event => this.handleChange(event)}
          />
          <br></br>
          <input
            type="sumbit"
            value={this.props.type}
            style={{ width: "5%" }}
          />
        </form>
      </div>
    );
  }
}

export default User;

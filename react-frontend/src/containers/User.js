import React from "react";

class User extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label for="name">Username:</label>
          <input type="text" name="name" />
          <br></br>
          <label for="password">Password:</label>
          <input type="text" name="password" />
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

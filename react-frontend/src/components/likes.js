import React from "react";
import { connect } from "react-redux";

class Likes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: props.likes
    };
  }

  hasUserLiked = () => {
    let hasLiked = this.state.likes.filter(
      like => like.user_id === this.props.user.id
    );
    console.log(hasLiked);
    if (hasLiked.length !== 0) {
      return (
        <button style={{ color: "blue" }}>
          Likes: {this.state.likes.length}
        </button>
      );
    } else {
      return <button>Likes: {this.state.likes.length}</button>;
    }
  };

  render() {
    return <>{this.hasUserLiked()}</>;
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(Likes);

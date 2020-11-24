import React from "react";
import { connect } from "react-redux";

class Likes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: props.likes
    };
  }
  // must be logged in to Like comment
  // ON DELETE LIKE dispatch action with likeId to delete from store
  //      With DELETE fetch to API.
  // dispatch for new like and create to api

  handleClick = () => {};

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

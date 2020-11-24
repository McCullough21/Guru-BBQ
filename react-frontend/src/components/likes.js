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

  handleClick = event => {
    console.log(event.target);
    event.target.style.color = "blue";
    //   if user hasliked? unlike / change button color back
    // if hasn't Like/change button color to blue
    //   ???Event.taget style ????
  };

  userHasLiked = () => {
    let hasLiked = this.state.likes.filter(
      like => like.user_id === this.props.user.id
    );
    if (hasLiked.length !== 0) {
      return true;
    } else {
      return false;
    }
  };

  renderLikeButton = () => {
    if (this.userHasLiked()) {
      return (
        <button onClick={this.handleClick} style={{ color: "blue" }}>
          Likes: {this.state.likes.length}
        </button>
      );
    } else {
      return (
        <button onClick={this.handleClick}>
          Likes: {this.state.likes.length}
        </button>
      );
    }
  };

  render() {
    return <>{this.renderLikeButton()}</>;
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(Likes);

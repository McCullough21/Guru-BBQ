import React from "react";
import { connect } from "react-redux";
import { newLike, deleteLike } from "../actions/fetch";

class Likes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: props.likes,
      loggedIn: !!props.user.username,
      triedToLike: false,
      hasLiked: false
    };
  }
  // must be logged in to Like comment
  // ON DELETE LIKE dispatch action with likeId to delete from store
  //      With DELETE fetch to API.
  // dispatch for new like and create to api
  toggleLiked = () => {
    console.log(this.state.hasLiked);
    this.setState({
      triedToLike: false,
      hasLiked: !this.state.hasLiked
    });
    // not repopulating with async api call.
    if (this.state.hasLiked) {
      console.log(this.state.hasLiked);
      const like = this.state.likes.find(
        like => like.user_id === this.props.user.id
      );
      deleteLike(like.id);
    } else {
      newLike(this.props.user.id, this.props.commentId);
    }
  };

  handleClick = event => {
    if (this.state.loggedIn) {
      this.toggleLiked();
      // function call, api based on hasLiked new like or delete like
    } else {
      this.setState({
        triedToLike: true
      });
    }
  };

  componentDidMount() {
    let hasLiked = this.state.likes.filter(
      like => like.user_id === this.props.user.id
    );
    if (hasLiked.length !== 0) {
      this.setState({
        hasLiked: true
      });
    } else {
      return null;
    }
  }

  render() {
    return (
      <>
        {this.state.hasLiked ? (
          <button onClick={this.handleClick} style={{ color: "blue" }}>
            Likes: {this.state.likes.length}
          </button>
        ) : (
          <button onClick={this.handleClick}>
            Likes: {this.state.likes.length}
          </button>
        )}
        {this.state.triedToLike ? (
          <p>*Login required to like a comment*</p>
        ) : null}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(Likes);

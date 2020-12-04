import React from "react";
import { connect } from "react-redux";
import { newLike, deleteLike } from "../actions/fetch";

class Likes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: [],
      loggedIn: !!props.user.username,
      triedToLike: false,
      hasLiked: false
    };
  }
  // must be logged in to Like comment
  // ON DELETE LIKE dispatch action with likeId to delete from store
  //      With DELETE fetch to API.
  // dispatch for new like and create to api

  toggleLiked = async () => {
    this.setState({
      triedToLike: false,
      hasLiked: !this.state.hasLiked
    });
    // not repopulating with async api call.
    if (this.state.hasLiked) {
      const like = this.props.likes.find(
        like => like.user_id === this.props.user.id
      );
      await this.props.deleteLike(like.id);
    } else {
      await this.props.newLike(this.props.user.id, this.props.commentId);
    }
    this.setState({
      likes: this.props.likes
    });
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
    this.setState({
      likes: this.props.likes
    });
    let hasLiked = this.props.likes.filter(
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

const mapDispatchToProps = dispatch => {
  return {
    deleteLike: id => dispatch(deleteLike(id)),
    newLike: (userId, commentId) => dispatch(newLike(userId, commentId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Likes);

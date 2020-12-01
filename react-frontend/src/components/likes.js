import React from "react";
import { connect } from "react-redux";
import { newLike } from "../actions/fetch";

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

  handleClick = event => {
    if (this.state.loggedIn) {
      this.setState({
        triedToLike: false,
        hasLiked: !this.state.hasLiked
      });
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

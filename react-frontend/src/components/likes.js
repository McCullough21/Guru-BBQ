import React from "react";
import { connect } from "react-redux";
import { newLike } from "../actions/fetch";

class Likes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: props.likes,
      loggedIn: !!props.user.username,
      triedToLike: false
    };
  }
  // must be logged in to Like comment
  // ON DELETE LIKE dispatch action with likeId to delete from store
  //      With DELETE fetch to API.
  // dispatch for new like and create to api

  handleClick = event => {
    if (this.state.loggedIn) {
      // if logged in, set state to liked and trigger action that contains api calls
    } else {
      this.setState({
        triedToLike: true
      });
    }

    // if (this.notLoggedIn()) {
    //   let notAbleToLike = this.abilityToLike();
    //   return (notAbleToLike.style.color = "red");
    // }
    // console.log(event.target);
    // event.target.style.color = "blue";
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

  render() {
    return (
      <>
        {this.userHasLiked() ? (
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

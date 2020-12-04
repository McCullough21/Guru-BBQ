import React from "react";
import { connect } from "react-redux";
import Likes from "./likes";

class Comments extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {};
  }

  // renderLikes = () => {
  //   let commentLikes = this.props.likes.filter(
  //     like => like.comment_id === this.props.comment.id
  //   );
  //   // this.setState({
  //   //   likes: commentLikes
  //   // });
  //   return <Likes likes={commentLikes} commentId={this.props.comment.id} />;
  // };

  renderDate = () => {
    let date = new Date(this.props.comment.created_at);
    let dateStamp = date.toLocaleDateString();
    let timeStamp = date.toLocaleTimeString();
    return (
      <p>
        {dateStamp}: {timeStamp}
      </p>
    );
  };

  render() {
    return (
      <div>
        <ul>
          <li>
            <h3>{this.props.comment.user_username}</h3>
            {this.renderDate()}
            <p>{this.props.comment.content}</p>
            <Likes
              likes={this.props.likes.filter(
                like => like.comment_id === this.props.comment.id
              )}
              commentId={this.props.comment.id}
            />
            {/* start comment reply chain here */}
          </li>
        </ul>
      </div>
    );
  }
}

// MAPstatetoprops changing when store changes, wont rerender likes
const mapStateToProps = state => {
  console.log(state.likes);
  return {
    likes: state.likes,
    user: state.user
  };
};

export default connect(mapStateToProps)(Comments);

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
      <p className="text-xs opacity-80 font-italic py-2 pr-3">
        {dateStamp}: {timeStamp}
      </p>
    );
  };

  render() {
    return (
      <div className="flex-col bg-gray-200 rounded shadow-lg my-3 w-full">
        <div className="flex justify-between shadow-sm">
          <h3 className="pl-3 py-2 text-sm font-bold">
            User: {this.props.comment.user_username}
          </h3>
          {this.renderDate()}
        </div>

        <p className="font-serif rounded shadow-md text-left text-sm opacity-80 bg-white bg-opacity-50 p-3 my-2 mx-10">
          {this.props.comment.content}
        </p>

        <Likes
          likes={this.props.likes.filter(
            like => like.comment_id === this.props.comment.id
          )}
          commentId={this.props.comment.id}
        />

        {/* start comment reply chain here */}
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

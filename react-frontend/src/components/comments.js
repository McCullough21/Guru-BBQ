import React from "react";

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commentId: props.comment.id
    };
  }
  // need to map likes to corresponding comment.
  // Populate likes button with like amount.
  // track userId to ensure user can only like a comment once
  // make like button blue if already liked
  // If user new like, persist new like
  // if user UnLike delete like record in DB

  // updateLikes = () => {
  //   this.setState(prevState => {
  //     return { likesAmount: (prevState.likesAmount += 1) };
  //   });
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
            <button onClick={() => this.updateLikes()}>
              Likes: {this.state.likesAmount}
            </button>
            {/* start comment reply chain here */}
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    likes: state.likes,
    user: state.user
  };
};

export default connect(mapStateToProps)(Comments);

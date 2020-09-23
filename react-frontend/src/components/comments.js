import React from "react";

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likesAmount: 0
    };
  }
  updateLikes = () => {
    this.setState(prevState => {
      return { likesAmount: (prevState.likesAmount += 1) };
    });
  };

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
          </li>
        </ul>
      </div>
    );
  }
}

export default Comments;

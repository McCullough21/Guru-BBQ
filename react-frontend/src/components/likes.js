import React from "react";

export default class Likes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: props.likes
    };
  }

  //   showLikes = () => {
  //     console.log(this.state.likes);
  //   };

  render() {
    return <button>Likes: {this.state.likes.length}</button>;
  }
}

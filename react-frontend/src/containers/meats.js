import React from "react";
import { connect } from "react-redux";
import { fetchComments } from "../actions/fetch";

class Meats extends React.Component {
  componentDidMount() {
    this.props.fetchComments();
  }

  showMeats = () => {
    return this.props.comments.map(comment => {
      return <p>{comment.content}</p>;
    });
  };

  render() {
    return <div>{this.showMeats()}</div>;
  }
}

const mapStateToProps = state => {
  return { comments: state.comments };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchComments: () => dispatch(fetchComments())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Meats);

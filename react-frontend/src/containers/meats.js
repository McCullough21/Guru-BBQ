import React from "react";
import { connect } from "react-redux";
import { fetchComments } from "../actions/fetch";
import Comments from "../components/comments";

// pass down handle change and stuff for state and handling new user comments

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
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>MEATS</h1>
        <p>{this.showMeats()}</p>
      </div>
    );
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

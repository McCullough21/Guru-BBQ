import React from "react";
import { connect } from "react-redux";
import { fetchComments } from "../actions/fetch";
import Comments from "../components/comments";
import { porkButt } from "../data.js";
import { ribs } from "../data.js";

// pass down handle change and stuff for state and handling new user comments
// send each <Comment> content, date created, username.  Make comments "newComment"
// TRY to not have to use store retrieval for new comment posting on page

class Meats extends React.Component {
  componentDidMount() {
    this.props.fetchComments();
  }

  popComments = () => {
    console.log(this.props.comments);
    return this.props.comments.map(comment => {
      return <Comments comment={comment} />;
    });
  };

  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>MEATS</h1>
        <div>
          <img src={ribs.img} alt="ribs" style={{ width: "300px" }} />
        </div>
        <div>
          <button>St. Louis-Style Ribs</button>
        </div>
        {this.popComments()}
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

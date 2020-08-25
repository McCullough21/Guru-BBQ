import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchComments, postComment } from "../actions/fetch";
import Comments from "../components/comments";
import Ribs from "../components/ribs";
import PorkButt from "../components/porkButt";

// pass down handle change and stuff for state and handling new user comments
// send each <Comment> content, date created, username.  Make comments "newComment"
// TRY to not have to use store retrieval for new comment posting on page

class Meats extends React.Component {
  constructor() {
    super();
    this.state = {
      comment: ""
    };
  }
  componentDidMount() {
    this.props.fetchComments();
  }

  popComments = name => {
    const meatComments = this.props.comments.filter(
      comment => comment.meatType === name
    );
    return meatComments;
  };

  handleChange = event => {
    this.setState({
      comment: event.target.value
    });
  };

  handleSubmit = event => {
    console.log(this.props.user);
    event.preventDefault();
    postComment(
      this.props.user.username,
      this.props.user.id,
      this.state.comment,
      event.target.name
    );
    this.setState(
      {
        comment: ""
      },
      this.props.fetchComments()
    );
  };

  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>MEATS</h1>
        <div>
          <Router>
            <nav>
              <Link to="/Ribs">
                <button
                  name="ribs"
                  style={{
                    margin: "10px",
                    textAlign: "center",
                    marginLeft: "35%"
                  }}
                >
                  St. Louis-Style Ribs
                </button>
              </Link>
              <Link to="/PorkButt">
                <button
                  name="porkButt"
                  style={{
                    margin: "10px",
                    textAlign: "center"
                  }}
                >
                  Pork Butt
                </button>
              </Link>
            </nav>
            <Switch>
              <Route path="/Ribs">
                <Ribs
                  comments={this.popComments("ribs")}
                  input={this.handleChange}
                  submit={this.handleSubmit}
                  currentUser={this.props.user}
                  currentState={this.state.comment}
                  meatType="ribs"
                />
              </Route>
              <Route path="/PorkButt">
                <PorkButt
                  comments={this.popComments("porkButt")}
                  input={this.handleChange}
                  submit={this.handleSubmit}
                  currentUser={this.props.user}
                  currentState={this.state.comment}
                  meatType="porkButt"
                />
              </Route>
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    comments: state.comments,
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchComments: () => dispatch(fetchComments())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Meats);

import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchComments, postComment } from "../actions/fetch";
import Ribs from "../components/ribs";
import PorkButt from "../components/porkButt";

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

  handleSubmit = async event => {
    event.preventDefault();
    if (this.props.user) {
      try {
        await postComment(
          this.props.user.username,
          this.props.user.id,
          this.state.comment,
          event.target.name
        );
      } catch (err) {
        console.log(err);
      }
      this.setState({
        comment: ""
      });
      this.props.fetchComments();
    }
  };

  logged_in = () => {
    if (!this.props.user.username) {
      return "* You must be logged in to post a comment";
    }
  };

  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>MEATS</h1>
        <div>
          <Router>
            <nav style={{ display: "flex", justifyContent: "center" }}>
              <Link to="/Ribs">
                <button name="ribs" style={{ marginRight: "50px" }}>
                  St. Louis-Style Ribs
                </button>
              </Link>
              <Link to="/PorkButt">
                <button name="porkButt" style={{ marginLeft: "50px" }}>
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
                  loggedIn={this.logged_in}
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
                  loggedIn={this.logged_in}
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

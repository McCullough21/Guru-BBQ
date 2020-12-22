import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchComments, postComment, fetchLikes } from "../actions/fetch";
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
    this.props.fetchLikes();
  }

  popComments = name => {
    const meatComments = this.props.comments.filter(
      comment => comment.meatType === name
    );
    return meatComments.reverse();
  };
  // post comment, then fetch, not changing state to re render

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
      <>
        {/* <h1 className="text-4xl font-bold font-gray-700 text-center m-10">
            MEATS
          </h1> */}

        <Router>
          <nav>
            <div className="p-3 bg-yellow-600 bg-opacity-30">
              <div className="flex justify-around w-100% mx-80">
                <Link to="/Meats/Ribs">
                  <button
                    name="ribs"
                    className="opacity-100 bg-opacity-70 bg-gray-100 flex-intial w-44 h-14 items-center border border-gray-300 rounded-md shadow-sm text-sm text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-red-900 focus:outline-none focus:ring-opacity-50 text-md font-bold mx-1"
                  >
                    St. Louis-Style Ribs
                  </button>
                </Link>
                <Link to="/Meats/PorkButt">
                  <button
                    name="porkButt"
                    className="opacity-100 bg-opacity-70 bg-gray-100 flex-intial w-44 h-14 items-center border border-gray-300 rounded-md shadow-sm text-sm text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-red-900 focus:outline-none focus:ring-opacity-50 text-md font-bold mx-1"
                  >
                    Pork Butt
                  </button>
                </Link>
              </div>
            </div>
          </nav>
          <Switch>
            <Route path="/Meats/Ribs">
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
            <Route path="/Meats/PorkButt">
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
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    comments: state.comments,
    user: state.user,
    likes: state.likes
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchComments: () => dispatch(fetchComments()),
    fetchLikes: () => dispatch(fetchLikes())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Meats);

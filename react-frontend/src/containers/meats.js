import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchComments } from "../actions/fetch";
import Comments from "../components/comments";
import Ribs from "../components/ribs";
import PorkButt from "../components/porkButt";

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
          <Router>
            <nav>
              <Link to="/Ribs">
                <button style={{ textAlign: "left", marginLeft: "30%" }}>
                  St. Louis-Style Ribs
                </button>
              </Link>
              <Link to="/PorkButt">
                <button style={{ marginLeft: "20%", marginRight: "30%" }}>
                  Pork Butt
                </button>
              </Link>
            </nav>
            <Switch>
              <Route path="/Ribs">
                <Ribs />
              </Route>
              <Route path="/PorkButt">
                <PorkButt />
              </Route>
            </Switch>
          </Router>
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

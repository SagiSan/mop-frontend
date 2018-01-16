import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import { testFunc } from "./reducers/testReducer";

import Home from "./components/Home/Home";
import Question from "./components/Question/Question";
import Questionnaire from "./components/Questionnaire/Questionnaire";
import Login from "./components/Login/Login";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: ""
    };
  }

  chooseType = type => {
    this.setState({ type });
  };

  render() {
    const PrivateRoute = ({ component: Component, ...rest }) => (
      <Route
        {...rest}
        render={props =>
          localStorage.getItem("token") ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location }
              }}
            />
          )
        }
      />
    );
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Mop</h1>
        </header>
        {/*         <div>
          <button
            onClick={() => {
              this.chooseType("text");
            }}
          >
            Text
          </button>
          <button
            onClick={() => {
              this.chooseType("yes/no");
            }}
          >
            Yes / No
          </button>
          <button
            onClick={() => {
              this.chooseType("multiple");
            }}
          >
            Multiple
          </button>
          <button
            onClick={() => {
              this.chooseType("single");
            }}
          >
            Single Choice
          </button>
        </div> */}
        <Router>
          <div>
            {/* <PrivateRoute exact path="/" component={Home} />
            <PrivateRoute exact path="/home" component={Home} /> */}
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/questionnaire/:id" component={Questionnaire} />
            <Route exact path="/login" component={Login} />
            <div />
          </div>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    test: state.test.test
  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      testFunc
    },
    dispatch
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(App);

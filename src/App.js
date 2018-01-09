import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { testFunc } from "./reducers/testReducer";
import Question from "./components/Question/Question";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: ""
    };
  }

  chooseType = type => {
    console.log(type);
    this.setState({ type });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <br />
        <div>
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
        </div>
        <Question type={this.state.type} />
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

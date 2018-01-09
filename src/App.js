import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { testFunc } from "./reducers/testReducer";

class App extends Component {
  render() {
    console.log(this.props.test);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={() => this.props.testFunc()}>{this.props.test}</button>
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

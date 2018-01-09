import React, { Component } from "react";
import "./Question.css";

export default class Question extends Component {
  render() {
    switch (this.props.type) {
      case "text":
        return <div>text</div>;
      case "yes/no":
        return <div>yes no</div>;
      case "multiple":
        return <div>multiple</div>;
      case "single":
        return <div>single</div>;
      default:
        return <div>choose type</div>;
    }
  }
}

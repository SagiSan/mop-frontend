import React, { Component } from "react";
import "./Questionnaire.css";
import { Input } from "semantic-ui-react";

export default class Questionnaire extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: ""
    };
  }

  componentWillMount() {
    this.setState({ id: this.props.match.params.id });
  }
  render() {
    const { id } = this.state;
    return (
      <div className="questionnaire">
        <Input
          label={{ tag: true, content: "Title" }}
          labelPosition="right"
          placeholder="Add title"
          value={id === "create" ? "" : "Stari Title"}
        />
      </div>
    );
  }
}

import React, { Component } from "react";
import "./Question.css";
import { Dropdown, Button, Form, Item } from "semantic-ui-react";

export default class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: "",
      answers: []
    };
  }
  render() {
    /* switch (this.props.type) {
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
    } */
    const types = [
      { key: 1, text: "text", value: "text" },
      { key: 2, text: "yes / no", value: "yes/no" },
      { key: 3, text: "multiple", value: "multiple" },
      { key: 4, text: "single", value: "single" }
    ];
    return (
      <div className="question">
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Dropdown
              placeholder="Type of question"
              options={types}
              selection
            />
            <Form.Input placeholder="Question" name="question" value="" />
            <Form.Input placeholder="Add possible answer" value="" />
            <Form.Button content="Submit" />
          </Form.Group>
        </Form>
      </div>
    );
  }
}

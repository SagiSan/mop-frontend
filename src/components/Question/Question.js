import React, { Component } from "react";
import "./Question.css";
import { Dropdown, Button, Form, Item, Radio } from "semantic-ui-react";

export default class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: "",
      type: "",
      answers: [],
      currentAnswer: "",
      radioValue: ""
    };
  }

  addAnswer = () => {
    this.state.answers.push(this.state.currentAnswer);
    this.setState({ answers: this.state.answers, currentAnswer: "" });
  };
  handleChange = (e, { value }) => this.setState({ radioValue: value });

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
    const { type, question, currentAnswer, answers } = this.state;
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
              value={this.state.type}
              onChange={(e, data) => this.setState({ type: data.value })}
            />
            {type !== "" && (
              <Form.Input
                placeholder="Question"
                name="question"
                value={question}
                onChange={e => this.setState({ question: e.target.value })}
              />
            )}
            {(type === "multiple" || type === "single") &&
              question !== "" && (
                <Form.Input
                  placeholder="Add possible answer"
                  value={currentAnswer}
                  onChange={e =>
                    this.setState({ currentAnswer: e.target.value })
                  }
                />
              )}
            {question !== "" && (
              <Form.Button
                primary
                content="Add Answer"
                onClick={() => this.addAnswer()}
              />
            )}
            <Form.Button content="Submit" />
          </Form.Group>
        </Form>
        <Form>
          {answers.length !== 0 &&
            answers.map(item => {
              return (
                <Form.Field key={item}>
                  <Radio
                    label={item}
                    name="radioGroup"
                    value={item}
                    checked={this.state.radioValue === item}
                    onChange={this.handleChange}
                  />{" "}
                </Form.Field>
              );
            })}
        </Form>
      </div>
    );
  }
}

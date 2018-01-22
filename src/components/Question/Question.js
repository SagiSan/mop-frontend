import React, { Component } from "react";
import "./Question.css";
import { Form, Radio, Checkbox } from "semantic-ui-react";

export default class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: "",
      radioValue: "",
      answersCheck: []
    };
  }
  componentWillMount() {
    if (this.state.answersCheck.length < 1) {
      for (let i = 0; i < this.props.question.choices.length; i++) {
        this.state.answersCheck.push({
          checked: false,
          value: this.props.question.choices[i]
        });
      }
      this.setState({ answersCheck: this.state.answersCheck });
    }
  }
  handleRadio = (e, { value }) => this.setState({ radioValue: value });
  updateAnswersChecks = index => {
    let arr = [...this.state.answersCheck];
    arr[index].checked = !arr[index].checked;
    this.setState({ answersCheck: arr });
  };
  render() {
    const { question } = this.props;
    const { answer, answersCheck } = this.state;

    return (
      <div className="question-container">
        <div className="question">{question.question}</div>
        {question.type === 0 && (
          <Form.Input
            placeholder="Write your answer here"
            value={answer}
            onChange={e => this.setState({ answer: e.target.value })}
          />
        )}
        {question.type === 1 && (
          <div>
            <Radio
              key="yes"
              label="yes"
              name="radioGroup"
              value="yes"
              checked={this.state.radioValue === "yes"}
              onChange={this.handleRadio}
            />
            <Radio
              key="no"
              label="no"
              name="radioGroup"
              value="no"
              checked={this.state.radioValue === "no"}
              onChange={this.handleRadio}
            />
          </div>
        )}
        {question.type === 2 &&
          question.choices.map((item, index) => {
            return (
              <Radio
                key={index}
                label={item.choice}
                name="radioGroup"
                checked={this.state.radioValue === item}
                onChange={this.handleRadio}
              />
            );
          })}
        {question.type === 3 &&
          question.choices.map((item, index) => {
            return (
              <Checkbox
                key={index}
                label={item.choice}
                checked={answersCheck[index].checked}
                onChange={() => this.updateAnswersChecks(index, item)}
              />
            );
          })}
      </div>
    );
  }
}

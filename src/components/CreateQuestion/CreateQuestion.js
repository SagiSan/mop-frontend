import React, { Component } from "react";
import "./CreateQuestion.css";
import { Dropdown, Button, Form, Item, Radio } from "semantic-ui-react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addQuestion } from "../../reducers/questionnairesReducer";

class Question extends Component {
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
  handleSubmit = () => {
    const { type, question, answers } = this.state;
    this.props.addQuestion({ type, question, choices: answers });
    this.setState({ question: "", type: "", answers: [] });
  };
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
      { key: 1, text: "text", value: 0 },
      { key: 2, text: "yes / no", value: 1 },
      { key: 4, text: "single", value: 2 },
      { key: 3, text: "multiple", value: 3 }
    ];
    return (
      <div className="question">
        <Form onSubmit={data => this.handleSubmit(data)}>
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
            {(type === 3 || type === 2) &&
              question !== "" && (
                <Form.Input
                  placeholder="Add possible answer"
                  value={currentAnswer}
                  onChange={e =>
                    this.setState({ currentAnswer: e.target.value })
                  }
                />
              )}
            {question !== "" &&
              type !== 0 &&
              type !== 1 && (
                <Form.Button
                  type="button"
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
            answers.map((item, index) => {
              return (
                <Form.Field key={index}>
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
const mapStateToProps = state => {
  return {
    test: state.test.test
  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ addQuestion }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(Question);

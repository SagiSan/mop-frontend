import React, { Component } from "react";
import "./Questionnaire.css";
import { Input, Button, Divider } from "semantic-ui-react";
import Question from "../Question/Question";

export default class Questionnaire extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      title: "",
      showQuestion: false,
      btnColor: "primary"
    };
  }

  componentWillMount() {
    this.setState({ id: this.props.match.params.id });
  }
  render() {
    const { id, title, showQuestion } = this.state;
    const serverQuestionnaire = {
      id: "3",
      title: "test"
    };
    return (
      <div className="questionnaire">
        <Input
          label={{ tag: true, content: "Title" }}
          labelPosition="right"
          placeholder="Add title"
          value={title ? title : ""}
          onChange={e => this.setState({ title: e.target.value })}
        />
        <Divider hidden />
        {showQuestion && <Question />}
        <Divider hidden />
        <Button
          onClick={() =>
            this.setState({
              showQuestion: !showQuestion,
              btnColor:
                this.state.btnColor === "primary" ? "negative" : "primary"
            })
          }
          className={"ui button " + this.state.btnColor}
        >
          {showQuestion ? "Cancel question" : "Add Question"}
        </Button>
        <Divider hidden />
        <Button className="submit-btn">Submit</Button>
      </div>
    );
  }
}

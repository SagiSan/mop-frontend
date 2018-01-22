import React, { Component } from "react";
import "./Questionnaire.css";
import { Input, Button, Divider, Form, Item, Radio } from "semantic-ui-react";
import CreateQuestion from "../CreateQuestion/CreateQuestion";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Question from "../Question/Question";
import { createQuestionnaire } from "../../reducers/questionnairesReducer";

class Questionnaire extends Component {
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
  submitQuestionnaire = () => {
    console.log("submit");
    let questionnaire = {
      title: this.state.title,
      questions: this.props.questions
    };
    this.props.createQuestionnaire(questionnaire);
    this.props.history.push("/home");
  };
  render() {
    const { id, title, showQuestion } = this.state;
    const serverQuestionnaire = {
      id: "3",
      title: "test"
    };
    const questions =
      this.props.questions.length > 0 &&
      this.props.questions.map((question, index) => {
        return <Question key={index} question={question} />;
      });
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
        <Form className="center-items">
          <Form.Group className="flex-column">{questions}</Form.Group>
        </Form>
        <Divider hidden />
        {showQuestion && <CreateQuestion />}
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
        <Button
          className="submit-btn"
          onClick={() => this.submitQuestionnaire()}
        >
          Submit
        </Button>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    questions: state.questionnaires.createQuestionnaire.questions
  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ createQuestionnaire }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Questionnaire);

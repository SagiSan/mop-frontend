import React, { Component } from "react";
import "./Questionnaire.css";
import { Input, Button, Divider, Form, Item, Radio } from "semantic-ui-react";
import CreateQuestion from "../CreateQuestion/CreateQuestion";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Question from "../Question/Question";

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
  render() {
    console.log(this.props.questions);
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
        <Form>
          <Form.Group>{questions}</Form.Group>
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
        <Button className="submit-btn">Submit</Button>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    questions: state.questionnaires.createQuestionnaire.questions
  };
};
/* const mapDispatchToProps = dispatch => {
  return bindActionCreators({ addQuestion }, dispatch);
}; */

export default connect(mapStateToProps)(Questionnaire);

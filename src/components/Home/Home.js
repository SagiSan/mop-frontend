import React, { Component } from "react";
import "./Home.css";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getQuestionnaires } from "../../reducers/questionnairesReducer";

class Home extends Component {
  constructor(props) {
    super(props);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.loaded) {
      this.props.getQuestionnaires();
    }
  }
  componentWillMount() {
    this.props.getQuestionnaires();
    console.log("home");
  }
  render() {
    const admin = true;
    const list = [1, 2, 3, 4];
    const questList =
      this.props.questionnaires &&
      this.props.questionnaires.map((quest, index) => {
        return <div key={index}>{quest.title}</div>;
      });
    return (
      <div className="home">
        {questList}
        <br />
        {admin && (
          <Link to="/questionnaire/create">
            <Button primary>Add Questionnaire</Button>
          </Link>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    questionnaires: state.questionnaires.questionnaires,
    loaded: state.questionnaires.loaded
  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getQuestionnaires }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

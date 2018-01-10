import React, { Component } from "react";
import "./Home.css";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    const admin = true;
    const list = [1, 2, 3, 4];
    const questList = list.map(quest => {
      return <div key={quest}>questionnaire {quest}</div>;
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

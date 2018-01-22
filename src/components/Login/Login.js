import React, { Component } from "react";
import "./Login.css";
import { Form, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getUser } from "../../reducers/loginReducer";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "sa@sa",
      name: "brasno",
      surname: "brasno"
    };
  }
  handleRegister = e => {
    e.preventDefault();
    console.log("reg");
    this.props.getUser(this.state.name, this.state.surname, this.state.email);
    this.props.history.push("/home");
  };
  handleLogin = e => {
    e.preventDefault();
    console.log("log");
  };
  render() {
    const { email, name, surname } = this.state;
    return (
      <div className="login">
        <Form onSubmit={e => this.handleRegister(e)}>
          <Form.Field>
            <label>Email</label>
            <input
              className="login-input"
              required
              placeholder="Email"
              type="email"
              value={email}
              onChange={e => this.setState({ email: e.target.value })}
            />
          </Form.Field>
          <Form.Field>
            <label>Name</label>
            <input
              className="login-input"
              required
              placeholder="Name"
              type="text"
              value={name}
              onChange={e => this.setState({ name: e.target.value })}
            />
          </Form.Field>
          <Form.Field>
            <label>Surname</label>
            <input
              className="login-input"
              required
              placeholder="Surname"
              type="text"
              value={surname}
              onChange={e => this.setState({ surname: e.target.value })}
            />
          </Form.Field>
          <Button className="login-btn" type="submit">
            Register / Login
          </Button>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user
  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getUser: getUser }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);

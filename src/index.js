import React from "react";
import ReactDOM from "react-dom";
import PasswordInput from "./components/PasswordInput";
import StrengthMeter from "./components/StrengthMeter";
import "./styles.css";
import { Container, Row, Col, Progress } from "reactstrap";
import Prefixer from "./components/Prefixer";
import Example from "./Example";
import { Provider } from "react-redux";
import store from "../src/store";
import App from "./App";

export default class Password extends React.Component {
  constructor(props) {
    super(props);
    this.state = { password: "" };
    this.changePassword = this.changePassword.bind(this);
  }
  changePassword(password) {
    this.setState({ password });
  }
  render() {
    let { goodPasswordPriciples } = this.props;
    let { password } = this.state;
    let { country } = this.props;
    return (
      <Container>
        <Container>
          <Row>
            <Col md="8">
              <PasswordInput
                priciples={goodPasswordPriciples}
                onPasswordChange={this.changePassword}
              />
            </Col>
            <Col md="4">
              <StrengthMeter
                principles={goodPasswordPriciples}
                password={password}
              />
            </Col>
          </Row>
        </Container>
        <Container>
          <Prefixer countylist={country} />
        </Container>
      </Container>
    );
  }
}
const SPECIAL_CHARS_REGEX = /[^A-Za-z0-9]/;
const DIGIT_REGEX = /[0-9]/;
Password.defaultProps = {
  goodPasswordPriciples: [
    {
      label: '"6+ characters",',
      predicate: password => password.length >= 6
    },
    {
      label: "with at least one digit",
      predicate: password => password.match(DIGIT_REGEX) !== null
    },
    {
      label: "with at least one special character",
      predicate: password => password.match(SPECIAL_CHARS_REGEX) !== null
    }
  ],
  country: [
    { name: "India", value: "IN", code: "+91" },
    {
      name: "USA",
      value: "USA",
      code: "+1"
    },
    {
      name: "South Africa",
      value: "AF",
      code: "+96"
    },
    {
      name: "Brazil",
      value: "BZ",
      code: "+15"
    }
  ]
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);

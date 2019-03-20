import React from "react";
import { Input } from "reactstrap";
import classNames from "classnames";

class PasswordInput extends React.Component {
  constructor(props) {
    super(props);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }
  handlePasswordChange(ev) {
    let { onPasswordChange } = this.props;
    onPasswordChange(ev.target.value);
    this.inputColor();
  }
  satisfiedPercent() {
    let { principles, password } = this.props;
    let satisfiedCount = principles
      .map(p => p.predicate(password))
      .reduce((count, satisfied) => count + (satisfied ? 1 : 0), 0);
    let principlesCount = principles.length;

    return (satisfiedCount / principlesCount) * 100.0;
  }
  inputColor() {
    let percentage = this.satisfiedPercent();
    return classNames({
      danger: percentage < 33.4,
      success: percentage >= 66.7,
      warning: percentage >= 33.4 && percentage < 66.7
    });
  }
  render() {
    return (
      <Input
        type="password"
        label="Password"
        color={this.inputColor}
        hasFeedback
        onChange={this.handlePasswordChange}
      />
    );
  }
}

export default PasswordInput;

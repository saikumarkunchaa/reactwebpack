import React from "react";
import Panel from "react-bootstrap";
import classNames from "classnames";
import { Progress } from "reactstrap";
class StrengthMeter extends React.Component {
  principleSatisified(principle) {
    let { password } = this.props;
    return principle.predicate(password);
  }

  principleClass(principle) {
    let satsified = this.principleSatisified(principle);
    return classNames({
      ["text-success"]: satsified,
      ["text-danger"]: !satsified
    });
  }
  satisfiedPercent() {
    let { principles, password } = this.props;
    let satisfiedCount = principles
      .map(p => p.predicate(password))
      .reduce((count, satisfied) => count + (satisfied ? 1 : 0), 0);
    let principlesCount = principles.length;

    return (satisfiedCount / principlesCount) * 100.0;
  }
  progressColor() {
    let percentage = this.satisfiedPercent();
    return classNames({
      danger: percentage < 33.4,
      success: percentage >= 66.7,
      warning: percentage >= 33.4 && percentage < 66.7
    });
  }
  render() {
    let { principles } = this.props;
    return (
      <div>
        <h5>A good password is:</h5>
        <Progress
          value={this.satisfiedPercent()}
          color={this.progressColor()}
          sai={this.progressColor()}
        />
        <ul>
          {principles.map(principle => (
            <li className={this.principleClass(principle)}>
              <small>{principle.label}</small>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default StrengthMeter;

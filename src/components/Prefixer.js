import React from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Container,
  Row,
  Col
} from "reactstrap";

class Prefixer extends React.Component {
  constructor(props) {
    super(props);
    this.hadleOnchange = this.hadleOnchange.bind(this);
    this.state = { countrycode: "" };
  }
  hadleOnchange(ev) {
    this.finalOperation(ev.target.value);
  }
  finalOperation(data) {
    let { countylist } = this.props;
    let { countrycode } = this.state;
    let matches = countylist.filter(key => key.value.includes(data));
    countrycode = matches[0].code;
    console.log(countrycode);
    this.setState({ countrycode: countrycode });
  }
  render() {
    let { countylist } = this.props;
    return (
      <Container>
        <Row>
          <Col md="8">
            Country List:
            <select name="contry" id="country" onChange={this.hadleOnchange}>
              {countylist.map(countryname => (
                <option value={countryname.value}>{countryname.name}</option>
              ))}
            </select>
            <br />
            Mobile Number:{" "}
            <input
              type="text"
              value={this.state.countrycode}
              name="mobilenumber"
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Prefixer;

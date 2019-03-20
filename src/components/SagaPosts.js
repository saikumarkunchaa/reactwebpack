import React from "react";
import { getData } from "../actions/index";
import { connect } from "react-redux";
import { getSagaData } from "../actions/index";
class SagaPosts extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getSagaData();
  }
  render() {
    if (this.props.loading) {
      console.log("if");
      return <div>Loadingdfgdfggdgfgdggdgdgdfgdfgdfgdfgd</div>;
    }

    if (this.props.error) {
      return <div style={{ color: "red" }}>ERROR: {this.props.error}</div>;
    }
    return (
      <ul className="list-group list-group-flush">
        {this.props.articles.map(el => (
          <li className="list-group-item">{el.title}</li>
        ))}
      </ul>
    );
  }
}
SagaPosts.defalutProps = {
  loading: true,
  error: false
};
function mapStateToProps(state) {
  return {
    articles: state.remoteArticles
  };
}
const mapDispatchToProps = {
  getSagaData
};
const Posts = connect(
  mapStateToProps,
  mapDispatchToProps
)(SagaPosts);
export default Posts;

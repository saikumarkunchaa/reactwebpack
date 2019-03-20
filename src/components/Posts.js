import React from "react";
import { getData } from "../actions/index";
import { connect } from "react-redux";
class Posts extends React.Component {
  constructor(props) {
    super(props);
    console.log("posts");
  }

  componentDidMount() {
    this.props.getData();
  }
  render() {
    return (
      <ul className="list-group list-group-flush">
        {this.props.articles.map(el => (
          <li className="list-group-item" key={el.id}>
            {el.title}
          </li>
        ))}
      </ul>
    );
  }
}
function mapStateToProps(state) {
  return {
    articles: state.remoteArticles.slice(0, 10)
  };
}
const Post = connect(
  mapStateToProps,
  { getData }
)(Posts);
export default Post;

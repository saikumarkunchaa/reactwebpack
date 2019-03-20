import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { articles: state.articles };
};

class ConnectedList extends React.Component {
  constructor(props) {
    super(props);
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

// ConnectedList.propTypes = {
//   articles: React.PropTypes.string,
// };

ConnectedList.defaultProps = {
  articles: [{ id: 4, title: "kirakumar" }]
};
const List = connect(mapStateToProps)(ConnectedList);
export default List;

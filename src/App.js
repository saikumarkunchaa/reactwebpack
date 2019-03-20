import React from "react";
import List from "./components/List";
import Form from "./components/Form";
import Post from "./components/Posts";
import Posts from "./components/SagaPosts";
class App extends React.Component {
  render() {
    return (
      <div className="row mt-5">
        <div className="col-md-4 offset-md-1">
          <h2>Articles</h2>
          <List />
          <Form />
          <Posts />
        </div>
      </div>
    );
  }
}

export default App;

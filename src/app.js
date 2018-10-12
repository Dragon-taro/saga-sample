import React from "react";
import connect from "react-redux";
import { increment, decrement } from "./actions";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Counter App</h1>
        <div>{this.props.count}</div>
      </div>
    );
  }
}

// export default App;

export default connect(state => state)(App);

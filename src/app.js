import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "./actions";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      count,
      actions: { increment, decrement }
    } = this.props;

    return (
      <div>
        <h1>Counter App</h1>
        <div>{count.value}</div>
        <div>
          <button onClick={() => increment()}>+</button>
          <button onClick={() => decrement()}>-</button>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) };
}

export default connect(
  state => state,
  mapDispatchToProps
)(App);

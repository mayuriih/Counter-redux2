import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { increaseCount, decreaseCount } from "../actions/index";

class Counter extends Component {
  render() {
    return (
      <div>
        <h1> Counter </h1>
        <h1> {this.props.count} </h1>
        <button onClick={this.props.handleIncrease}> + </button>
        <button onClick={this.props.handleDecrease}> - </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.counter.count
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      handleIncrease: increaseCount,
      handleDecrease: decreaseCount
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

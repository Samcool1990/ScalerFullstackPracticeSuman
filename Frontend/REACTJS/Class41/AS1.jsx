import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    // Initialize state with count set to 0
    this.state = {
      count: 0
    };
  }

  incrementCount = () => {
    // Use functional setState to update the count based on the previous state
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  };

  decrementCount = () => {
    // Use functional setState to update the count based on the previous state
    this.setState(prevState => ({
      count: prevState.count - 1
    }));
  };

  render() {
    return (
      <div>
        <h2>Counter</h2>
        {/* Render the current count */}
        <div>Count: {this.state.count}</div>
        <button onClick={this.incrementCount}>Increment</button>
        <button onClick={this.decrementCount}>Decrement</button>
      </div>
    );
  }
}

export default Counter;

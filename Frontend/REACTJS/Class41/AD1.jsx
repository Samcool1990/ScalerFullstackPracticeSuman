import React, { PureComponent } from "react";

class PureCounter extends PureComponent {
  constructor(props) {
    super(props);
    // Initialize state here
    this.state = {
      counter: 0,
    };
  }

  // Implement the handleClick method to handle button clicks
  handleClick = () => {
    // Update the counter state by 1 without mutating the state directly
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  };

  render() {
    return (
      <div>
        <h2>Pure Counter</h2>
        <p>Count: {this.state.counter}</p>
        {/* Implement the button component to trigger the handleClick method */}
        <button onClick={this.handleClick}>Increment</button>
      </div>
    );
  }
}

export default PureCounter;

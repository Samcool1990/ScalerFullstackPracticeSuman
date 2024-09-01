// 4. What are Props & how you move data from parent to child or vice versa  with Example
// Props (short for "properties") in React are a mechanism for passing data and configuration down to child components from a parent component. Props are immutable, meaning they cannot be changed by the child component receiving them; they are read-only.

// What are Props?
// Definition: Props are a way to pass data from a parent component to a child component.
// Purpose: Props enable the creation of dynamic and reusable components by allowing them to accept different inputs (data) and behave differently based on those inputs.
// Usage: Props can be any data type: strings, numbers, objects, functions, etc.
// Passing Data from Parent to Child
// Data is passed from a parent to a child component by defining props in the parent component and then accessing them in the child component.

// Example: Passing Data from Parent to Child
// Here's a basic example to illustrate how props work in React.

// javascript

// ParentComponent.js
import React from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const message = "Hello from the Parent Component!";
  const number = 42;

  return (
    <div>
      <h1>Parent Component</h1>
      {/* Passing data to child using props */}
      <ChildComponent message={message} number={number} />
    </div>
  );
};

export default ParentComponent;
// javascript

// ChildComponent.js
import React from 'react';

// Accept props as a parameter
const ChildComponent = ({ message, number }) => {
  return (
    <div>
      <h2>Child Component</h2>
      {/* Accessing the passed props */}
      <p>{message}</p>
      <p>The number is: {number}</p>
    </div>
  );
};

export default ChildComponent;
// Explanation:
// ParentComponent:

// Defines two variables, message and number.
// Passes these as props to ChildComponent by using attributes (message and number).
// ChildComponent:

// Receives message and number as props.
// Displays the received data in the rendered output.
// Passing Data from Child to Parent
// React components are usually "unidirectional," meaning data typically flows from parent to child. However, you can pass data back from child to parent by using callback functions.

// Example: Passing Data from Child to Parent Using Callback Functions
// Let's modify our components to allow the child to send data back to the parent.

// javascript

// ParentComponent.js
import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const [childData, setChildData] = useState("");

  // Callback function to receive data from child
  const handleDataFromChild = (data) => {
    setChildData(data);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <p>Data from Child: {childData}</p>
      {/* Passing callback function to child as a prop */}
      <ChildComponent sendDataToParent={handleDataFromChild} />
    </div>
  );
};

export default ParentComponent;
// javascript:

// ChildComponent.js
import React from 'react';

const ChildComponent = ({ sendDataToParent }) => {
  const data = "Hello from Child!";

  return (
    <div>
      <h2>Child Component</h2>
      {/* Calling the parent's function with data from child */}
      <button onClick={() => sendDataToParent(data)}>Send Data to Parent</button>
    </div>
  );
};

export default ChildComponent;
// Explanation:
// ParentComponent:

// Defines a state variable, childData, to hold data received from the child.
// Defines a callback function, handleDataFromChild, which updates the state.
// Passes this callback function as a prop (sendDataToParent) to the ChildComponent.
// ChildComponent:

// Accepts the sendDataToParent function as a prop.
// Calls this function with some data ("Hello from Child!") when the button is clicked.
// Key Takeaways
// Props are used to pass data from parent to child.
// Callback Functions are used to send data from child to parent.
// React’s data flow is typically unidirectional (top-down), but you can use callbacks to send data upward when necessary.
// This approach keeps your components modular and reusable, ensuring clear and maintainable data flows in your application.
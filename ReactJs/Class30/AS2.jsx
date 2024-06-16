// Counter.jsx:
import React, { useState } from "react";

function Counter({ index, value }) {
  const [count, setCount] = useState(value);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div>
      <h2>Counter Number: {index}</h2>
      <button onClick={increment}>+</button>
      <p>{count}</p>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default Counter;



// parent.jsx:
import React from "react";
import Counter from "./Counter";

function ParentCounter() {
  return (
    <div>
      <Counter index={1} value={2} />
      <Counter index={2} value={3} />
      <Counter index={3} value={4} />
    </div>
  );
}

export default ParentCounter;
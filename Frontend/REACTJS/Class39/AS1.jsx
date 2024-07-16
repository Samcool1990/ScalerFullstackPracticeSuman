import React, { useState, useMemo } from "react";

function ExpensiveComponent() {
  const [count, setCount] = useState(0);
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);

  // Expensive calculation
  const calculateSum = (numbers) => {
    console.log("Calculating sum...");
    return numbers.reduce((acc, curr) => acc + curr, 0);
  };

  const sum = useMemo(() => calculateSum(numbers), [numbers]);

  return (
    <div>
      <h1>Sum: {sum}</h1>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <h2>Count: {count}</h2>
    </div>
  );
}

export default ExpensiveComponent;

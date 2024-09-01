// 1. Create Custom Hook in react, Which will fetch a url, If the data fetch successfull 
// then return the data, If data is still not fetched the show 'In-Progress'.

import { useState, useEffect } from 'react';

const useFetch = (url) => {
  // Initialize state variables
  const [data, setData] = useState(null); // For storing fetched data
  const [loading, setLoading] = useState(true); // To track loading status
  const [error, setError] = useState(null); // To store any errors

  useEffect(() => {
    // Create an async function to fetch data
    const fetchData = async () => {
      try {
        const response = await fetch(url); // Fetch data from the provided URL
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`); // Handle non-OK responses
        }
        const result = await response.json(); // Parse the response as JSON
        setData(result); // Store the fetched data in state
      } catch (err) {
        setError(err.message); // Store any errors that occur
      } finally {
        setLoading(false); // Indicate that loading is complete
      }
    };

    fetchData(); // Call the fetch function
  }, [url]); // Dependency array to trigger re-fetch when URL changes

  // Return data, loading state, and error state
  return { data, loading, error };
};

export default useFetch;
 

// **
// Diffing 
// Batching 
// reconciliation 
// Custom Hooks
// Memoization
// Reduc 
// Time Implementation
// **

// 2. Create s structure in Redux store for checkout cart with coupon code with Following dataponits
//         1.Add to cart
//         2.Remove from Cart
//         3.Update Quantity
//         4.Apply Coupon

// 3. Create a timer in React with play pause reset features

// 1. Diffing
// Diffing is the process React uses to determine what has changed in the virtual DOM compared to the actual DOM. React uses a reconciliation algorithm to efficiently update the DOM by only applying changes that are necessary. This makes React fast and efficient.

// Example of Diffing
// Consider the following components:

// javascript:

// ExampleComponent.js
import React, { useState } from 'react';

const ExampleComponent = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default ExampleComponent;
// In this example:

// When you click the "Increment" button, the count state changes.
// React performs a "diff" between the previous and new states of the virtual DOM. It notices that 
// only the <h1> element's content has changed, so it only updates that part in the actual DOM.



// 2. Batching
// Batching is a process in React where multiple state updates are grouped together in a single re-render for performance optimization. By batching updates, React minimizes the number of times it re-renders a component, making it more efficient.

// Example of Batching
// javascript:

import React, { useState } from 'react';

const BatchingExample = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("John");

  const handleClick = () => {
    setCount(count + 1);
    setName("Jane");
    // React will batch these updates and perform a single re-render
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <h2>Name: {name}</h2>
      <button onClick={handleClick}>Update</button>
    </div>
  );
};

export default BatchingExample;
// In this example:

// Both setCount and setName are called in the handleClick function.
// React batches these updates and performs a single re-render, rather than two separate ones.


// 3. Reconciliation
// Reconciliation is the process React uses to update the DOM in the most efficient way. When the state of a component changes, React creates a new virtual DOM tree and compares it to the previous one. It then calculates the minimal number of changes required to update the actual DOM.

// Example of Reconciliation
// Consider the following components:

// javascript:

import React, { useState } from 'react';

const ReconciliationExample = () => {
  const [text, setText] = useState("Hello");

  const changeText = () => setText("Goodbye");

  return (
    <div>
      <h1>{text}</h1>
      <button onClick={changeText}>Change Text</button>
    </div>
  );
};

export default ReconciliationExample;
// In this example:

// When you click the "Change Text" button, React compares the new virtual DOM with the previous one.
// It sees that only the text inside <h1> has changed, so it only updates that part, making the update 
// very efficient.



// 4. Custom Hooks
// Custom Hooks are functions that start with "use" and allow you to reuse stateful logic between components. They help reduce duplicate code by encapsulating complex logic into a reusable function.

// Example of a Custom Hook
// javascript:

// useCounter.js
import { useState } from 'react';

// Custom Hook to manage counter logic
const useCounter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return { count, increment, decrement };
};

export default useCounter;
// javascript:

// CounterComponent.js
import React from 'react';
import useCounter from './useCounter';

const CounterComponent = () => {
  const { count, increment, decrement } = useCounter();

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default CounterComponent;
// In this example:

// useCounter is a custom hook that encapsulates counter logic (increment and decrement).
// CounterComponent uses this custom hook to easily implement counter functionality.


// 5. Memoization
// Memoization is an optimization technique to improve performance by caching the results of expensive function calls. In React, you can use React.memo and useMemo to avoid unnecessary re-renders and computations.

// Example of Memoization
// javascript:

import React, { useMemo, useState } from 'react';

const ExpensiveCalculation = ({ num }) => {
  console.log("Calculating...");
  return num * 2; // Expensive calculation
};

const MemoizationExample = () => {
  const [count, setCount] = useState(0);

  // Memoize the result of the expensive calculation
  const doubleCount = useMemo(() => ExpensiveCalculation({ num: count }), [count]);

  return (
    <div>
      <h1>Double Count: {doubleCount}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default MemoizationExample;
// In this example:

// The ExpensiveCalculation function is called only when count changes, thanks to useMemo.
// This avoids unnecessary recalculations, improving performance.


// 6. Redux
// Redux is a state management library for JavaScript applications. It helps manage the state of your application in a centralized store. This makes it easier to maintain and debug the state.

// Example of a Simple Redux Store
// javascript:

// store.js
import { createStore } from 'redux';

// Initial state
const initialState = {
  count: 0,
};

// Reducer function
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

// Create a Redux store
const store = createStore(reducer);

export default store;
// javascript:

// CounterComponent.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const CounterComponent = () => {
  const count = useSelector(state => state.count); // Get state from Redux store
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
    </div>
  );
};

export default CounterComponent;
// In this example:

// A Redux store is created with an initial state and a reducer.
// CounterComponent interacts with the Redux store using useSelector to get the state and useDispatch 
// to dispatch actions.


// 7. Time Implementation (Timer)
// A Timer component in React can be created using state and the setInterval function.

// Example of a Timer Component
// javascript:

import React, { useState, useEffect } from 'react';

const TimerComponent = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => setSeconds((prev) => prev + 1), 1000);
    }
    return () => clearInterval(timer); // Cleanup interval on unmount or when `isRunning` changes
  }, [isRunning]);

  return (
    <div>
      <h1>Seconds: {seconds}</h1>
      <button onClick={() => setIsRunning(true)}>Start</button>
      <button onClick={() => setIsRunning(false)}>Pause</button>
      <button onClick={() => { setIsRunning(false); setSeconds(0); }}>Reset</button>
    </div>
  );
};

export default TimerComponent;
// In this example:

// seconds state holds the timer count.
// isRunning state controls whether the timer is running or paused.
// useEffect is used to set up and clear the interval for the timer.
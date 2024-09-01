import React, { useState, useEffect, useRef } from 'react';

const Timer = () => {
  // State to hold time in seconds
  const [time, setTime] = useState(0);
  // State to track whether the timer is running
  const [isRunning, setIsRunning] = useState(false);

  // Using a ref to hold the interval ID so it persists across renders
  const intervalRef = useRef(null);

  // Effect to handle timer logic
  useEffect(() => {
    if (isRunning) {
      // If timer is running, start the interval to increment time
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else if (!isRunning && intervalRef.current) {
      // Clear the interval when the timer is paused or stopped
      clearInterval(intervalRef.current);
    }
    // Cleanup function to clear the interval on component unmount or when dependencies change
    return () => clearInterval(intervalRef.current);
  }, [isRunning]); // Dependency array to run the effect when isRunning changes

  // Function to handle play/pause
  const handlePlayPause = () => {
    setIsRunning((prevState) => !prevState);
  };

  // Function to handle reset
  const handleReset = () => {
    setTime(0);
    setIsRunning(false);
    clearInterval(intervalRef.current);
  };

  // Function to format the time as HH:MM:SS
  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;

    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div>
      <h1>Timer</h1>
      <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>
        {formatTime(time)}
      </div>
      <button onClick={handlePlayPause}>{isRunning ? 'Pause' : 'Play'}</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Timer;



// App.Js
// import React from 'react';
// import ReactDOM from 'react-dom';
// import Timer from './Timer'; // Adjust the import path as necessary

// const App = () => (
//   <div>
//     <Timer />
//   </div>
// );

// ReactDOM.render(<App />, document.getElementById('root'));

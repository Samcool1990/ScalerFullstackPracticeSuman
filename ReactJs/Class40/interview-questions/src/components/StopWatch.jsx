// src/Components/StopWatch.jsx

import React, { useState, useRef } from 'react';

const StopWatch = () => {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  const handleStart = () => {
    if (!isActive) {
      setIsActive(true);
      setIsPaused(false);
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    }
  };

  const handlePause = () => {
    if (isActive && !isPaused) {
      clearInterval(intervalRef.current);
      setIsPaused(true);
    }
  };

  const handleStop = () => {
    clearInterval(intervalRef.current);
    setIsActive(false);
    setIsPaused(false);
  };

  const handleReset = () => {
    clearInterval(intervalRef.current);
    setIsActive(false);
    setIsPaused(false);
    setTime(0);
  };

  const formatTime = (time) => {
    const getMilliseconds = `0${(time % 1000) / 10}`.slice(-2);
    const seconds = Math.floor(time / 1000);
    const getSeconds = `0${seconds % 60}`.slice(-2);
    const minutes = Math.floor(seconds / 60);
    const getMinutes = `0${minutes % 60}`.slice(-2);
    return `${getMinutes}:${getSeconds}:${getMilliseconds}`;
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>StopWatch</h1>
      <div style={{ fontSize: '48px', margin: '20px 0' }}>{formatTime(time)}</div>
      <div>
        <button onClick={handleStart} disabled={isActive && !isPaused}>Start</button>
        <button onClick={handlePause} disabled={!isActive || isPaused}>Pause</button>
        <button onClick={handleStop} disabled={!isActive}>Stop</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default StopWatch;

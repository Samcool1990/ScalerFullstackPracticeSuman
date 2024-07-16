// src/App.js

import React from 'react';
import Accordion from './components/Accordion';
import StopWatch from './components/StopWatch';
import Carousel from './components/Carousel';
import Modal from './components/Modal';

const items = [
  {
    title: 'What is React?',
    content: 'React is a front-end JavaScript library developed by Facebook in 2011.'
  },
  {
    title: 'Why use React?',
    content: 'React is a favorite JavaScript library among engineers.'
  },
  {
    title: 'How do you use React?',
    content: 'You use React by creating components.'
  }
];

const App = () => {
  return (
    <div className="ui container">
      <h1>Frequently Asked Questions</h1>
      <Accordion items={items} />
      <StopWatch />
      <Carousel/>
      {/* <Modal/> */}
    </div>
  );
};

export default App;

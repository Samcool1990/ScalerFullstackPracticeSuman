import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const Home = () => {
  return(
    <h1>YooHoo React!</h1>
  )
}

const Heading = (props) => {
  
  return (
    <h1>  {props.name} {props.surname}</h1>

  )
}

const Component  = () => {
  return (
    <ul>
      <Heading name = "Suman 1" surname='Pathak'/>
      <Heading name = "Suman 2" surname='Pathak'/>
      <Heading name = "Suman 3" surname='Pathak'/>
      <Home />
        <li>Details 1</li>
        <li>Details 2</li>
        <li>Details 3</li>
        <li>Details 4</li>
    </ul>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <Component />
  
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  // "HelloWorld!"
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

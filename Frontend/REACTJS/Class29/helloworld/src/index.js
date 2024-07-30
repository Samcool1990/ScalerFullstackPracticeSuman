import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";

const Home = () => {
  return(
    <div>
      <h1>Hello World!!</h1>
        <p>This is a p tag</p>        
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul>
        <button>Submit</button>
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    // <React.StrictMode>
    //   <App />
    // </React.StrictMode>
    <Home/> 
    
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

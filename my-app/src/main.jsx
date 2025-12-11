// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// // import App from './App.jsx'
// // import Name from './Name.jsx'
// // import Counter from './Counter.jsx'
// import App1 from './App1.jsx'


// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     {/* <App />
//     <Name />
//     <Counter /> */}
//     <App1 />
//   </StrictMode>,
// )
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

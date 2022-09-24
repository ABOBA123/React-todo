import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// const WhiteTheme = document.getElementById('white-theme')
// const backgraung = document.getElementById('backgraung-color')
// WhiteTheme.forEach(switcher => {
//   switcher.addEventListener('click', function(){
//     alert('hello world')
//   })
// })
// const WhiteTheme = document.getElementById("white-theme")
// const blackTheme = document.getElementById("black-theme")
// const backgraung = document.getElementById("backgraung")
// WhiteTheme.onclick = function(){
//   WhiteTheme.innerHTML = "backgraung-color_white"
// }
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

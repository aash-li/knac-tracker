import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from "firebase/app"
import reportWebVitals from './reportWebVitals';

firebase.initializeApp({
  apiKey: "AIzaSyB9bW7Re6B3y3Bv7BViWNWvPquq4gHkoUg",
  authDomain: "knac-app.firebaseapp.com",
  databaseURL: "https://knac-app-default-rtdb.firebaseio.com",
  projectId: "knac-app",
  storageBucket: "knac-app.appspot.com",
  messagingSenderId: "608833851290",
  appId: "1:608833851290:web:aef40085e4293f81b23423",
  measurementId: "G-JHW6KPM0L7"
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

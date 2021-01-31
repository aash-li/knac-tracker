import React, { useState } from 'react';
import firebase from "firebase";
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Logout from './components/Logout';

function App() {

  // a reference to the database
  var database = firebase.database();


  const [loggedIn, setLoggedIn] = useState(false)
  const [name, setName] = useState()

	function testfunc() {
    console.log("entered");
		database.ref("tests/test1").set( {
			testnum : 1,
			really : true,
			yay : "no"
		});
	}

  return (
    <div className="21 days">
      <header className="21 Days">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to 21 days, a habit tracker.
        </p>
      </header>

			<button onClick={testfunc}>test button</button>

      <div style={{}}>
        <Login loggedIn={loggedIn} setLoggedIn = {(bool) => setLoggedIn(bool)} setName={(name) => setName(name)}/>
        {loggedIn ? <p>Hello {name}</p>: <p>Not logged in</p> }
        <Logout loggedIn={loggedIn} setLoggedIn = {(bool) => setLoggedIn(bool)}/>
      </div>
    </div>
  );
}

export default App;

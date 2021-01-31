import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Logout from './components/Logout';

function App() {

	// Config setup
  var config = {
    apiKey: "AIzaSyB9bW7Re6B3y3Bv7BViWNWvPquq4gHkoUg",
    authDomain: "knac-app.firebaseapp.com",
    // For databases not in the us-central1 location, databaseURL will be of the
    // form https://[databaseName].[region].firebasedatabase.app.
    // For example, https://your-database-123.europe-west1.firebasedatabase.app
    databaseURL: "https://knac-app-default-rtdb.us-west2.firebasedatabase.app",
    storageBucket: "gs://knac-app.appspot.com"
  };
  firebase.initializeApp(config);

  // a reference to the database
  var database = firebase.database();


  const [loggedIn, setLoggedIn] = useState(false)
  const [name, setName] = useState()

	function testfunc() {
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

			<button onclick={testfunc}>test button</button>

      <div style={{}}>
        <Login loggedIn={loggedIn} setLoggedIn = {(bool) => setLoggedIn(bool)} setName={(name) => setName(name)}/>
        {loggedIn ? <p>Hello {name}</p>: <p>Not logged in</p> }
        <Logout loggedIn={loggedIn} setLoggedIn = {(bool) => setLoggedIn(bool)}/>
      </div>
    </div>
  );
}

export default App;

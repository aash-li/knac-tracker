import React, { useState } from 'react';
import firebase from "firebase";
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Logout from './components/Logout';
import Progress from './components/Progress';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header, Home, About, Contact } from "./components";

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
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/contact" exact component={() => <Contact />} />
        </Switch>
      </Router>
      <div><Progress /></div>

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

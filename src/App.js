import React, { useState } from 'react';
import firebase from "firebase";
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Logout from './components/Logout';
import Habit from './components/Habit';
import Progress from './components/Progress';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header, Home, Goal, Contact } from "./components";

function App() {

  // a reference to the database
  var database = firebase.database();


  const [loggedIn, setLoggedIn] = useState(false);
  const [name, setName] = useState();
  const [currentUserId, setUserId] = useState(null);

  // logging a user to knac database and also record in App function
  let logUser = (userObj) => {
      setUserId(userObj.googleId);
      database.ref("users/"+userObj.googleId).set({
      name: userObj.name,
      imageUrl: userObj.imageUrl,
      id: userObj.googleId
    });
  }

  return (
    <div className="21 days">
      <header className="21 Days">
        <p class="title"> 
          Welcome to 21 days, a habit tracker.
        </p>
      </header>
      <div style={{}}>
        <Login onSuccess={logUser} loggedIn={loggedIn} setLoggedIn = {(bool) => setLoggedIn(bool)} setName={(name) => setName(name)} class="login"/>
        {loggedIn ? <p>Hello {name}</p>: <p>Not logged in</p> }
        <Logout loggedIn={loggedIn} setLoggedIn = {(bool) => setLoggedIn(bool)}/>
      </div>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/Goal" exact component={() => <Goal userId={currentUserId} database={database}/>}/>
          <Route path="/contact" exact component={() => <Contact />} />
        </Switch>
      </Router>
      <div><Progress /></div>
    </div>
  );
}

export default App;

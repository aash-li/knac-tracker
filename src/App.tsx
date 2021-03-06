import React, { useState, Component } from 'react';
import firebase from "firebase";
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Logout from './components/Logout';
import Habit from './components/Habit';
import Progress from './components/Progress';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header, Home, Goal, Contact } from "./components";

interface AppState {
    loggedIn: boolean;
    database: any;
    currentUser: any;
    currentName: any;
}

class App extends Component<{}, AppState> {
    constructor(props: any) {
        super(props);
        this.state = {
            loggedIn: false,
            database: firebase.database(),
            currentUser: null,
            currentName: null,
        };
    }

    // logging a user to knac database and also record in App function
    loginUser = () => {
        if (this.state.loggedIn){
            alert("already logged in");
        } else {
            this.setState({
                loggedIn: true
            });
            console.log("logged in");
        }
    }

    logoutUser = () => {
        if (!this.state.loggedIn) {
            alert("Not logged in");
        } else {
            this.setState({
                loggedIn: false,
                currentUser: null,
                currentName: null
            });
            console.log("logged out");
        }
    }

    logUser = (userObj: any) => {
        this.setState({
            currentUser: userObj.googleId
        })
        this.state.database.ref("users/"+userObj.googleId).set({
            name: userObj.name,
            imageUrl: userObj.imageUrl,
            id: userObj.googleId
        });
    }

    setName = (name: any) => {
        this.setState({
            currentName: name
        })
    }

    render() {
        return (
            <div className="21 days">
              <header className="21 Days">
                <p> 
                  Welcome to 21 days, a habit tracker.
                </p>
              </header>
            <div style={{}}>
                <Login onSuccess={this.logUser} loggedIn={this.state.loggedIn} setLoggedIn = {this.loginUser} setName={this.setName} class="login"/>
                <Logout loggedIn={this.state.loggedIn} setLoggedIn = {this.logoutUser}/>
            </div>
              <Router>
                <Header />
                <Switch>
                  <Route path="/" exact component={() => <Home isLoggedIn={this.state.loggedIn}/>} />
                  <Route path="/Goal" exact component={() => <Goal userId={this.state.currentUser} database={this.state.database}/>}/>
                  <Route path="/contact" exact component={() => <Contact />} />
                </Switch>
              </Router>
            </div>
          );
    }
}

export default App;
/* Login Button for later

      <div style={{}}>
        <Login onSuccess={logUser} loggedIn={loggedIn} setLoggedIn = {(bool) => setLoggedIn(bool)} setName={(name) => setName(name)} class="login"/>
        {loggedIn ? <p>Hello {name}</p>: <p>Not logged in</p> }
        <Logout loggedIn={loggedIn} setLoggedIn = {(bool) => setLoggedIn(bool)}/>
      </div>
                  <button onClick={() => this.loginUser()}>Login</button>
              <button onClick={() => this.logoutUser()}>Logout</button>
*/

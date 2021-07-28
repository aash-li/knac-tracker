import React from "react";
import HomeIn from "./HomeIn";
import HomeOut from "./HomeOut";
import firebase from "firebase";

function Home(props) {
  if (props.isLoggedIn) {
    return <HomeIn userId={props.userId} database={firebase.database()}/>;
  } else {
    return <HomeOut/>;
  }
}

export default Home;
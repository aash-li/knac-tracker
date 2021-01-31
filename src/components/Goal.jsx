import React from "react";
import Habit from './Habit';
import firebase from "firebase";

function Goal(props) {
  return (
    <div className="goal">
      <div class="container">
        <div class="row align-items-center my-5">
          <Habit id='1' database={firebase.database()}/>
        </div>
      </div>
    </div>
  );
}

export default Goal;
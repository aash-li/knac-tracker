import React, {Component} from "react";
import Habit from './Habit';
import firebase from "firebase";

// props: userid, database
class Goal extends Component{
  constructor(props) {
    super(props);
    this.state = {
      options: {},
      optionNames: {}
    }
  }

  componentDidMount() {
    let numHabitsRef = this.props.database.ref("userToHabit/" + this.props.userId + "/numHabits")
    let numHabits;
    numHabitsRef.on('value', (snapshot) => {
      numHabits = snapshot.val();
    })
    console.log("here are teh number of habits")
    console.log(numHabits)
    console.log(this.props.userId)
    let allIds = [];
    let habitNames = [];
    for (var i = 0; i < numHabits; i++) {
      // get the habit id
      let curRef = this.props.database.ref("userToHabit/" + this.props.userId + "/" + i + "/HabitId")
      let curId;
      curRef.on('value', (snapshot) => {
        curId = snapshot.val();
      })

      console.log("here is the current id " + curId)
      allIds.push(curId)

      // get the name of the habit using the id
      let nameRef = this.props.database.ref("habits/habit" + curId + "/title")
      let name;
      nameRef.on('value', (snapshot) => {
        name = snapshot.val();
      })
      console.log("the name is: " + name)
      habitNames.push(name)
    }
    this.setState({
      options: allIds,
      optionNames: habitNames
    })
    console.log("these are the ids..")
    console.log(this.state.options)
    console.log("here are the names...")
    console.log(this.state.optionNames)
  }

  render() {
    var options = [];
    options.push(<option value={"null"}>Select a Habit</option>)
    for (var i = 0; i < this.state.options.length; i++) {
      options.push(<option value={this.state.options[i]}>{this.state.optionNames[i]}</option>)
    }
    return (
      <div className="goal">
        <div class="container">
          <div class="row align-items-center my-5">
          <select>{options}</select>
          <Habit id='1' userId={this.props.userId} database={firebase.database()}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Goal;
// <Habit id='1' userId={props.userId} database={firebase.database()}/>
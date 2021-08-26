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
    this.updateDropdown();
    console.log("these are the ids..")
    console.log(this.state.options)
    console.log("here are the names...")
    console.log(this.state.optionNames)
    if (this.state.options == null || this.state.optionNames == null) {
      return;
    }
  }

  updateDropdown() {
    let habitRef = this.props.database.ref("/userToHabit/" + this.props.userId)
    let data;
    habitRef.on('value', (snapshot) => {
      data = snapshot.val();
      console.log(data)
      const itemsId = data.map((habitEntry) =>
        habitEntry.HabitId
      );

      const itemsName = data.map((habitEntry) =>
        habitEntry.HabitName  
      );

      this.setState({options: itemsId, optionNames: itemsName})
    });
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
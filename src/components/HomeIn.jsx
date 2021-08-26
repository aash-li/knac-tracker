import React, {Component} from "react";


/**
 * Props:
 * 
 * userId - user id of the current user
 * database - the current firebase database
 */
class HomeIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: null,
      currentId: null,
      userHabitCount: null
    };
  }
  
  componentDidMount() {
    let currentHabitIDRef = this.props.database.ref("habits/currentHabitID")
    var thisHabitId;
    currentHabitIDRef.on('value', (snapshot) => {
      thisHabitId = snapshot.val();
      this.setState({
        currentId: thisHabitId
      })
    })
    this.getUserCount();
  }

  updateComment = (event) => {
    this.setState({
      comment: event.target.value
    })
    // console.log(event.target.value)
  }

  createTask = () => {
    // console.log(this.state.comment)
    // get the currentHabitID

    var thisHabitId = this.state.currentId;
    console.log("the current habit id is " + thisHabitId);
    this.props.database.ref('habits/habit'+ thisHabitId).set({
      title: this.state.comment,
      userId: this.props.userId
    })

    // write the new habit to userToHabit
    this.props.database.ref('userToHabit/' + this.props.userId + "/" + this.state.userHabitCount).set({
      HabitId: thisHabitId,
      HabitName: this.state.comment
    })
    
    let newHabitId = thisHabitId + 1
    this.props.database.ref('habits').update({
      currentHabitID: newHabitId
    })
  }

  getUserCount = () => {
    let habitRef = this.props.database.ref('/userToHabit/' + this.props.userId);
    let data;
    let numHabits;
    habitRef.on('value', (snapshot) => {
      data = snapshot.val();
      numHabits = data.length
      console.log("user to be habit " + numHabits);
      this.setState({userHabitCount: numHabits})
    })
  }

  render() {
    return (
      <div className="home">
        <div class="container">
          <div class="row align-items-center my-5">
            <div class="col-lg-5">
              <h1 class="title">Home</h1>
              <header className="21 Days">
                  <p class="center">
                      Here are your goals today: HI
                  </p>
              </header>
              <textarea class='comment-box' onChange={this.updateComment}/>
              <button onClick={this.createTask}>Create a New Task!</button>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default HomeIn;
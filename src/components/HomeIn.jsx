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
      comment: null
    };
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
    let currentHabitIDRef = this.props.database.ref("habits/currentHabitID")
    // console.log(this.props.database.ref("habitToUser/entry1/habitID"))
    var currentHabitID;
    currentHabitIDRef.on('value', (snapshot) => {
      currentHabitID = snapshot.val();
      console.log(snapshot.val());
    })
    this.props.database.ref('habits/habit'+currentHabitID).set({
      title: this.state.comment,
      userId: this.props.userId
    })
    this.props.database.ref('habits').update({
      currentHabitID: currentHabitID + 1
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
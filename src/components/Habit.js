import React, {Component} from 'react';
import Stickies from './Stickies'
import Progress from './Progress'

/**
 * Props:
 *
 * id - the id of the habit in the database
 * database - the knac database
 * userId: the id of the current user
 */
class Habit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: null,
      title: null,
      day: null,
      length: null,
      stickiesCount: null
    };
  }

  componentDidMount() {
    let habitRef = this.props.database.ref("/habits/habit" + this.props.id);
    let data;
    habitRef.on('value', (snapshot) => {
      data = snapshot.val();
      this.updateInfo(data);
    });
  }

  updateInfo(data) {
    console.log(data)
    this.setState({
      title: data.title,
      day: data.day,
      length: data.length,
      stickiesCount: data.stickies.length
    });
  }

  updateComment = (event) => {
    this.setState({
      comment: event.target.value
    })
  }

  submitComment = () => {
    this.props.database.ref('users/'+this.props.userId).once('value').then((snapshot) => {
      const data = snapshot.val();
      this.props.database.ref('habits/habit'+this.props.id+'/stickies/'+this.state.stickiesCount)
      .set({
        username: (data) ? data.name : "Anonymous",
        message: this.state.comment,
        userId: (data) ? data.id : null,
        imageUrl: (data) ? data.imageUrl: null
      });
    });
  }

  render() {
    return (
      <div class='habitpage'>
        <h3>{this.state.title}</h3>
        <h5>Day {this.state.day} of {this.state.length}</h5>
        <Progress />
        <Stickies habitId={this.props.id} database={this.props.database}/>
        <textarea class='comment-box' onChange={this.updateComment}/>
        <button onClick={this.submitComment}>send</button>
      </div>
    )
  }
}

export default Habit;

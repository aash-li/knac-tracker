import React, {Component} from 'react';

class Stickies extends Component {

  constructor(props) {
    super(props);
    this.state = {dom : null};
  }

  componentDidMount() {
    let messagesRef = this.props.database.ref("habits/habit1/stickies");
    let data;
    messagesRef.once('value').then((snapshot) => {
      data = snapshot.val();
      this.updateDom(data);
      console.log(data);
    });
  }

  updateDom(notes) {
    const items = notes.map((stickie) => 
      <div class="stickie">
        <h5>{stickie.username}</h5>
        <p>{stickie.message}</p>
      </div>
    );

    this.setState({
      dom: items
    });
  }

  render() {
    return (
      <div id="stickies">
        {this.state.dom}
      </div>
    );
  }
}

export default Stickies;

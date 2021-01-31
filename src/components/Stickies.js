import React, {Component} from 'react';

/**
 * Props:
 * habitId: the id of the habit that these stickers belong to
 * database: the database that contains the information about all habits
 */
class Stickies extends Component {

  constructor(props) {
    super(props);
    this.state = {dom : null};
  }

  componentDidMount() {
    let stickiesRef = this.props.database.ref("habits/habit"+this.props.habitId+"/stickies");
    stickiesRef.on('value', (snapshot) => {
      const data = snapshot.val();
      this.updateDom(data);
    });
  }

  updateDom(data) {
    console.log(data);
    const items = data.map((stickie) =>
      <div class="stickie">
        <h5>{stickie.username}</h5>
        <img src={stickie.imageUrl}/>
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

import React from 'react';
import './App.css'

class Colorized extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      color: '',
      bgColor: 'white'
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      color: e.target.value
    })
  }

  handleSubmit(e) {
    this.setState({
      bgColor: this.state.color
    })
    e.preventDefault();
  }

  render() {
    var boxColor = {
      backgroundColor: this.state.bgColor
    };
    return (
      <div className="main">
        <div style={boxColor} className="colorbox"></div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange}
            placeholder="entenr a color">

          </input>
          <button type="submit">go</button>
        </form>
      </div >
    )
  }
}

export default Colorized;
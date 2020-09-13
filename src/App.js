import React from 'react';
import './App.css'

class Colorized extends React.Component {

  constructor() {
    super();
    this.state = {
      color: '',
      bgColor: 'red'
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    var styleBg = {
      backgroundColor: this.state.bgColor
    }
    return (
      <div>
        <div style={styleBg} className="colorBox"></div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange}
            placeholder="enter a color">
          </input>
          <button type="submit">go</button>
        </form>
      </div>
    )
  }
}

export default Colorized;
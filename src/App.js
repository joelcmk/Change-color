import React from 'react';
import './App.css'

class Colorized extends React.Component {

  constructor() {
    super();
    this.state = {
      color: '',
      bgColor: 'white'
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

    this._input.focus();
    this._input.value = "";

    e.preventDefault();
  }

  render() {
    var styleBg = {
      backgroundColor: this.state.bgColor
    }

    var self = this

    return (
      <div className="colorArea">
        <div style={styleBg} className="colorSquare"></div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange}
            ref={
              function (el) {
                self._input = el;
              }
            }
            placeholder="enter a color">
          </input>
          <button type="submit">go</button>
        </form>
      </div>
    )
  }
}

export default Colorized;
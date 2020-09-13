import React from 'react';
import './App.css'

class Colorized extends React.Component {

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
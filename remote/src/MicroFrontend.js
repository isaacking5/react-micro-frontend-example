import React, {Component} from "react";

class MicroFrontend extends Component {
  state = {
    name: "",
  };

  onChangeName = (event) => {
      this.setStateValue(event.target.value)
  };

  setStateValue = (value) => {
    this.setState({name:value})
  }

  onKeyPress = (event) => {
    if(event.keyCode === 13){
        alert(`Hi, ${this.state.name}`)
        this.setStateValue('')
    }
  }

  render() {
    return (
      <div>
      <label>Enter your name:</label>
        <input
          type="text"
          id="lname"
          value={this.state.name}
          onChange={this.onChangeName}
          onKeyDown={this.onKeyPress}
        />
      </div>
    );
  }
}

export default MicroFrontend;

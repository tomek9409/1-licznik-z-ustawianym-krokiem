import React, { Component } from "react";
import "./Clock.css";

class Clock extends Component {
  constructor(props) {
    super(props);

    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.tick();
    }, 1000);
  }

  tick = () => {
    this.setState({
      date: new Date(),
    });
  };

  render() {
    return (
      <div className="clock">
        <h4>
          Time: {this.state.date.toLocaleTimeString()}
          <span onClick={this.props.toogleClockMethod}>X</span>
        </h4>
      </div>
    );
  }
}

export default Clock;

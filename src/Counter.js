import React, { Component } from "react";
import "./Counter.css";
import Display from "./Display";
import ButtonsPanel from "./ButtonsPanel";
// import Clock from "./Clock";
import ClockFunctional from "./ClockFunctional";
import Step from "./Step";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counterValue: this.props.initValue,
      showClock: true,
      stepValue: 0,
    };
  }

  changeValue = (action) => {
    this.setState((prevState, prevProps) => {
      let currentCounterValue = prevState.counterValue;
      let currentStepValue = prevState.stepValue;

      if (action === "add") {
        currentCounterValue += currentStepValue;
      } else if (action === "reinit") {
        currentCounterValue = prevProps.initValue;
      } else {
        currentCounterValue = 0;
      }
      return {
        counterValue: currentCounterValue,
      };
    });
  };

  toogleClock = () => {
    this.setState((prevState) => {
      return {
        showClock: !prevState.showClock,
      };
    });
  };

  changeStep = (step) => {
    this.setState({ stepValue: +step });
  };
  render() {
    let clockElement = "";
    if (this.state.showClock) {
      // clockElement = <Clock toogleClockMethod={this.toogleClock} />;
      clockElement = <ClockFunctional toogleClockMethod={this.toogleClock} />;
    } else {
      clockElement = (
        <span onClick={this.toogleClock} className="show-clock">
          Show Clock
        </span>
      );
    }
    return (
      <div className="counter">
        Licznik:
        <Display displayValue={this.state.counterValue} />
        <ButtonsPanel
          buttonMethod={this.changeValue}
          stepStateValue={this.state.stepValue}
        />
        <Step stepValue={this.stepValue} updateStep={this.changeStep} />
        {clockElement}
      </div>
    );
  }
}

export default Counter;

// function Counter(props) {
//   let randomNumber = Math.floor(Math.random() * (108 - 1 + 1) + 1);

//   return (
//     <div className="counter">
//       Counter:
//       <span className="value">{props.initValue}</span>
//     </div>
//   );
// }
// export default Counter;

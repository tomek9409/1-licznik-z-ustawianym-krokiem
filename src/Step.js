import React from "react";
import "./Step.css";

function Step(props) {
  let inputStep = 0;

  return (
    <div className="step">
      <h1>Krok: </h1>
      <input
        ref={(data) => {
          inputStep = data;
        }}
        onChange={() => {
          props.updateStep(inputStep.value);
        }}
        type="number"
        min={1}
        value={props.stepValue}
        placeholder={"Podaj liczbę"}
      />
    </div>
  );
}

export default Step;

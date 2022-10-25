import React from "react";
import "./ButtonsPanel.css";

function ButtonsPanel(props) {
  return (
    <div className="buttons-panel">
      <button
        onClick={() => {
          props.buttonMethod("add");
        }}
      >
        Add <span>{props.stepStateValue}</span>
      </button>
      <button
        onClick={() => {
          props.buttonMethod("reinit");
        }}
      >
        Reinit
      </button>
      <button
        onClick={() => {
          props.buttonMethod("reset");
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default ButtonsPanel;

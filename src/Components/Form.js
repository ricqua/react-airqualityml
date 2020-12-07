import React from "react";

const Form = () => {
  return (
    <React.Fragment>
      <div className="formComponent">
        <input id="inputTemperature" placeholder="23ºC"></input>
        <input id="inputHumidity" placeholder="55%RH"></input>
        <input id="inputCO2" placeholder="800ppm"></input>
        <button id="buttonPredict" Text="Submit">
          Submit
        </button>
      </div>
      <div className="outputContainer">
        <p>Output area</p>
      </div>
    </React.Fragment>
  );
};

export default Form;

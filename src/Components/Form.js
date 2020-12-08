import React, { useState } from "react";
import OutputComponent from "./OutputComponent";

const Form = () => {
  const [input, setInput] = useState({
    inputTemperature: "",
    inputHumidity: "",
    inputCO2: "",
  });

  const handleChange = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    setInput({ ...input, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const [data, setData] = useState([]);
  };

  return (
    <React.Fragment>
      <form className="formComponent" onSubmit={handleSubmit}>
        <input
          id="inputTemperature"
          placeholder="23ºC"
          onChange={handleChange}
        ></input>
        <input
          id="inputHumidity"
          placeholder="55%RH"
          onChange={handleChange}
        ></input>
        <input
          id="inputCO2"
          placeholder="800ppm"
          onChange={handleChange}
        ></input>
        <button id="buttonPredict" type="submit">
          Submit
        </button>
      </form>
      <OutputComponent />
    </React.Fragment>
  );
};

export default Form;

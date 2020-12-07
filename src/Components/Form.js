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

  const handleFetch = (e) => {
    e.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Bearer sJ50wZb8uGgV8EFIamZuI+tY5dcpsZ2VkAhgmv+oJq0xF6ASfurz1uaBJ3CVgTlXfn7tjjpK4lgsWeYRKIDoLg=="
    );
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      Inputs: {
        input1: {
          ColumnNames: ["Temperature", "Humidity", "CO2"],
          Values: [
            ["22", "55", "800"],
            ["22", "55", "800"],
          ],
        },
      },
      GlobalParameters: {},
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin",
    };

    fetch(
      "https://ussouthcentral.services.azureml.net/workspaces/2925ec637804440e8a968080918b7775/services/63cdf886d22c441085c48b1ac1af75aa/execute?api-version=2.0&details=true",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  return (
    <React.Fragment>
      <form className="formComponent" onSubmit={handleFetch}>
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
        <p>{input.temp}</p>
      </form>
      <OutputComponent />
    </React.Fragment>
  );
};

export default Form;

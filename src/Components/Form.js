import React, { useState } from "react";
import OutputComponent from "./OutputComponent";

const Form = () => {
  const [input, setInput] = useState({
    inputTemperature: "22",
    inputHumidity: "55",
    inputCO2: "800",
  });
  const URL =
    "https://ussouthcentral.services.azureml.net/workspaces/2925ec637804440e8a968080918b7775/services/63cdf886d22c441085c48b1ac1af75aa/execute?api-version=2.0&format=swagger";
  // const Endpoint =
  //   "http://52.231.76.170:80/api/v1/service/ricqua-microdustav1-endpoint1/score";

  // const Authorisation = "Bearer bykddjziDfoNcf2q0HC6tkTlGVJxHYum";

  // request.AddHeader("Content-Type", "application/json");
  // request.AddHeader("Authorization", "Bearer sJ50wZb8uGgV8EFIamZuI+tY5dcpsZ2VkAhgmv+oJq0xF6ASfurz1uaBJ3CVgTlXfn7tjjpK4lgsWeYRKIDoLg==");
  // request.AddHeader("Content-Type", "text/plain");
  const [fetchBody, setFetchBody] = useState();

  const handleChange = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    setInput({ ...input, [id]: value });
  };

  const handleFetch = (e) => {
    e.preventDefault();
    setFetchBody({
      Inputs: {
        input1: [
          {
            Temperature: input.inputTemperature,
            Humidity: input.inputHumidity,
            CO2: input.inputCO2,
          },
        ],
      },
      GlobalParameters: {},
    });
    console.log(URL + fetchBody);
    // fetch(URL)
    //   .then((response) => response.json())
    // .then((user) => {
    //   const { login } = user;
    //   setUser(login);
    //   setIsLoading(false);
    // })
    // .catch((error) => console.log(error));
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

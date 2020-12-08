import React, { useState } from "react";

const OutputComponent = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  let outputResults = [];

  const inputTemperature = props.props.inputTemperature;
  let inputHumidity = props.props.inputHumidity;
  let inputCO2 = props.props.inputCO2;

  const myHeaders = new Headers();
  const URL =
    "https://ussouthcentral.services.azureml.net/workspaces/2925ec637804440e8a968080918b7775/services/63cdf886d22c441085c48b1ac1af75aa/execute?api-version=2.0&details=true";
  const proxyUrl = "https://cors-anywhere.herokuapp.com/";

  myHeaders.append(
    "Authorization",
    "Bearer sJ50wZb8uGgV8EFIamZuI+tY5dcpsZ2VkAhgmv+oJq0xF6ASfurz1uaBJ3CVgTlXfn7tjjpK4lgsWeYRKIDoLg=="
  );
  myHeaders.append("Content-Type", "application/json");

  const handleFetchData = async () => {
    setIsLoading(true);

    var raw = JSON.stringify({
      Inputs: {
        input1: {
          ColumnNames: ["Temperature", "Humidity", "CO2"],
          Values: [
            [inputTemperature, inputHumidity, inputCO2],
            ["", "", ""],
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
    };

    console.log(raw);

    const response = await fetch(proxyUrl + URL, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        outputResults = JSON.parse(result);
        outputResults = outputResults.Results.output1.value.Values[0];
        console.log(outputResults);
      })
      .catch((error) => {
        setIsError(true);
        setIsError("Error:", error);
      });

    setIsLoading(false);
  };

  // console.log(outputResults);
  if (isLoading) {
    return (
      <div className="outputContainer">
        <h1 className="loadingMessage">Loading...</h1>
      </div>
    );
  }
  if (isError) {
    <div className="outputContainer">
      <button id="buttonPredict" type="submit" onClick={handleFetchData}>
        Try Again
      </button>
      <h1 className="output_error">Error</h1>
    </div>;
  }
  return (
    <div className="outputContainer">
      <button id="buttonPredict" type="submit" onClick={handleFetchData}>
        Submit
      </button>
      <div>
        <p>{outputResults}</p>
        <p>{Math.round(outputResults[3])}</p>
      </div>
      <div>
        <p className="output_key">
          Temperature:
          <lable className="output_value">{outputResults[0]}</lable> ºC
        </p>
        <p className="output_key">
          Humidity:
          <label className="output_value">{outputResults[1]}</label> %RH
        </p>
        <p className="output_key">
          CO2:
          <label className="output_value"> {outputResults[3]} </label> ppm
        </p>
        <p className="output_key">
          pm2.5:
          <label className="output_value">55</label> ppm
        </p>
      </div>
    </div>
  );
};

export default OutputComponent;

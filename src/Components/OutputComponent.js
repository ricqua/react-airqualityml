import React, { useState } from "react";

const OutputComponent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isResult, setIsResult] = useState("");
  const myHeaders = new Headers();
  const URL =
    "https://ussouthcentral.services.azureml.net/workspaces/2925ec637804440e8a968080918b7775/services/63cdf886d22c441085c48b1ac1af75aa/execute?api-version=2.0&details=true";
  const proxyUrl = "https://cors-anywhere.herokuapp.com/";

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
          ["20", "60", "1000"],
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
  };

  const fetchData = async () => {
    setIsLoading(true);
    // console.log("fetch clicked");
    const response = await fetch(proxyUrl + URL, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        let obj = JSON.parse(result);
        obj = obj.Results.output1.value.Values[0];
        console.log(obj);
        setIsResult(obj);
      })
      .catch((error) => setIsError("Error:", error));

    setIsLoading(false);
  };

  if (isLoading) {
    return (
      <div className="noData">
        <h1>Loading...</h1>
      </div>
    );
  }
  if (isError) {
    <div className="noData">
      <button id="submitButton" type="submit" onClick={fetchData}>
        Try Again
      </button>
      <h1>{isError}</h1>
    </div>;
  }
  return (
    <div className="outputContainer">
      <button id="submitButton" type="submit" onClick={fetchData}>
        fetch
      </button>
      <p>{Math.round(isResult[3])}</p>
    </div>
  );
};

export default OutputComponent;

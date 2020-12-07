import React, { useState } from "react";

const OutputComponent = () => {
  const [pm25, setPm25] = useState();

  if (pm25) {
    return (
      <React.Fragment>
        <div className="outputContainer">
          <p>OutputComponent</p>
        </div>
      </React.Fragment>
    );
  } else {
    return (
      <div className="noData">
        <p>No data</p>
      </div>
    );
  }
};

export default OutputComponent;

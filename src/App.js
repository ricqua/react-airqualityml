import React from "react";
import Header from "./Components/Header.js";
import Form from "./Components/Form";

const App = () => {
  return (
    <React.Fragment>
      <div className="wrapper">
        <div className="main">
          <Header />
          <Form />

          <p className="footerText">Copyright protected 2020</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;

import React from "react";
import Form from "./Components/Form.js";
import Header from "./Components/Header.js";

const App = () => {
  return (
    <React.Fragment>
      <div className="wrapper">
        <div className="main">
          <Header />
          <Form />
        </div>
        {/* <p className="footerText">Copyright protected 2020</p> */}
      </div>
    </React.Fragment>
  );
};

export default App;

import React from "react";

const Header = () => {
  return (
    <React.Fragment>
      <div className="headerComponent">
        <h1 className="headerComponent_title">pm2.5 forecast</h1>
        <p className="headerComponent_subtitle">
          This web app employs a machine learning algorithm to predict the
          expected air pollution value (pm2.5) in particles per million (ppm)
          based on temperate (ºC), humidity (%RH) and carbon dioxide (CO2)
          inputs. The machine learning model was trained on data collected
          between May 2019 - July 2019 in Seoul, South Korea using Arduino
          controlled weather stations. As a result, the model can only
          reasonably recognise weather patterns within the range of data
          collected. Any data outside the training data ranges will produce a
          mostly inaccurate forecast. Azure ML Studio was used to train the
          model and is currently being used to host the model for this web app.
        </p>
      </div>
    </React.Fragment>
  );
};

export default Header;

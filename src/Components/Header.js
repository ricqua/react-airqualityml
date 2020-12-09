import React from "react";

const Header = () => {
  return (
    <React.Fragment>
      <div className="headerComponent">
        <h1 className="headerComponent_title">pm2.5 forecast</h1>
        <p className="headerComponent_subtitle">
          This web app will using machine learning to predict an expected air
          pollution value (pm2.5) in particles per million (ppm) based on
          temperate (ºC), humidity (%RH) and carbon dioxide (CO2) inputs. The
          machine learning model was trained on data collected between x - y
          dates in Seoul, South Korea using Arduino controlled weather stations.
          As a result, the model can only reasonably recognise weather patterns
          within the range of data collected. These data ranges are indicated in
          each input field. Azure ML Studio was used to train the model and is
          currently being used to host the model for this web app.
        </p>
      </div>
    </React.Fragment>
  );
};

export default Header;

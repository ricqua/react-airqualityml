import React from "react";

const Header = () => {
  return (
    <React.Fragment>
      <div className="headerComponent">
        <h1 className="headerComponent_title">pm2.5 forecast</h1>
        <h3 className="headerComponent_subtitle">
          Use this web app to forecast the upcoming pm2.5
        </h3>
      </div>
    </React.Fragment>
  );
};

export default Header;

import { useState } from "react";
import { Redirect } from "react-router-dom";

import "./typePage.css";

const TypePage = (n) => {
  const [back, setBack] = useState(false);

  if (n.location.state) {
    var { typeLetter } = n.location.state;
  }

  const handleClick = () => {
    setBack(true);
  };

  if (back) {
    return (
      <Redirect
        to={{
          pathname: "./result",
        }}
      />
    );
  }
  return (
    <>
      {typeLetter && (
        <div className="container">
          <div className={`typeText ${typeLetter}1`}></div>
          <div className={`typeText ${typeLetter}2`}></div>
          <button className="double-border-button" onClick={handleClick}>
            Вернуться назад
          </button>
        </div>
      )}
    </>
  );
};

export default TypePage;

import React, { useState, useMemo } from "react";
import { useHistory } from "react-router-dom";
import Result from "./ResultComponent";
import { answers } from "./aswers";
import "./Test.css";
import { useCounter } from "../hooks/useCounter";

function Test() {
  const { index, setIndex, counter, setCounter } = useCounter();
  const [state1, setstate1] = useState(answers[index]);
  const onChoose = (key) => {
    switch (key) {
      case "d":
      case "i":
      case "c":
      case "s":
        setCounter((prev) => ({ ...prev, [key]: counter[key] + 1 }));
        break;
      default:
        console.log("Switch is broken");
    }
    if (answers.length > index) {
      setIndex(index + 1);
      setstate1(answers[index + 1]);
    }
  };

  const test = () => {
    return state1.map((item, i) => (
      <a className="double-border-button" onClick={() => onChoose(item.key)}>
        {item.value}
      </a>
    ));
  };

  const page = () => {
    if (index < answers.length) {
      return (
        <p className="page">
          {" "}
          стр {index + 1} из {answers.length}
        </p>
      );
    }
  };

  return (
    <>
      {index < answers.length ? test() : <Result counter={counter} />}
      {page()}
    </>
  );
}

export default Test;

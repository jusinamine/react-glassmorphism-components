import React, { useEffect, useRef, useState } from "react";
import "./calculator.css";
import VanillaTilt from "vanilla-tilt";

export default function Calculator({ textColor, activeButtonClass }) {
  const tilt = useRef(null);
  const [operation, setOperation] = useState({
    value1: "0",
    operator: "",
    value2: "",
  });

  useEffect(() => {
    VanillaTilt.init(tilt.current, {
      speed: 400,
      max: 15,
      glare: true,
      "max-glare": 0.2,
    });
  }, []);

  const calculateOperation = (firstVal, secondVal, operator) => {
    switch (operator) {
      default:
        return "no operation";
      case "+":
        return firstVal + secondVal;
      case "-":
        return firstVal - secondVal;
      case "*":
        return firstVal * secondVal;
      case "/":
        return firstVal / secondVal;
    }
  };

  //select operator + - * /
  const selectOperator = (value) => {
    if (operation.operator === "")
      setOperation({ ...operation, operator: value });
    else if (operation.value2 !== "")
      setOperation({
        value1: calculateOperation(
          operation.value1,
          operation.value2,
          operation.operator
        ),
        operator: "",
        value2: "",
      });
  };

  //select variables of operation
  const selectVariables = (value) => {
    if (operation.operator === "")
      setOperation({
        ...operation,
        value1:
          value === "."
            ? operation.value1 + value
            : Number(operation.value1 + value).toString(),
      });
    else setOperation({ ...operation, value2: operation.value2 + value });
  };

  //clear calc input
  const clearAll = () => {
    setOperation({ value1: "0", operator: "", value2: "" });
  };

  //equal result
  const getResult = () => {
    if (operation.value2 !== "")
      setOperation({
        value1: calculateOperation(
          operation.value1,
          operation.value2,
          operation.operator
        ),
        operator: "",
        value2: "",
      });
  };

  return (
    <div ref={tilt} className="container">
      <div
        style={{ color: textColor }}
        className={"calculator " + activeButtonClass}
      >
        <input
          style={{ color: textColor }}
          type="text"
          readOnly
          value={operation.value1 + operation.operator + operation.value2}
          className="value"
        />
        <span className="num clear" onClick={() => clearAll()}>
          c
        </span>
        <span className="num" onClick={() => selectOperator("/")}>
          /
        </span>
        <span className="num" onClick={() => selectOperator("*")}>
          *
        </span>
        <span className="num" onClick={() => selectVariables("7")}>
          7
        </span>
        <span className="num" onClick={() => selectVariables("8")}>
          8
        </span>
        <span className="num" onClick={() => selectVariables("9")}>
          9
        </span>
        <span className="num" onClick={() => selectOperator("-")}>
          -
        </span>
        <span className="num" onClick={() => selectVariables("4")}>
          4
        </span>
        <span className="num" onClick={() => selectVariables("5")}>
          5
        </span>
        <span className="num" onClick={() => selectVariables("6")}>
          6
        </span>
        <span className="num plus" onClick={() => selectOperator("+")}>
          +
        </span>
        <span className="num" onClick={() => selectVariables("1")}>
          1
        </span>
        <span className="num" onClick={() => selectVariables("2")}>
          2
        </span>
        <span className="num" onClick={() => selectVariables("3")}>
          3
        </span>
        <span className="num" onClick={() => selectVariables("0")}>
          0
        </span>
        <span className="num" onClick={() => selectVariables("00")}>
          00
        </span>
        <span className="num" onClick={() => selectVariables(".")}>
          .
        </span>
        <span className="num equal" onClick={() => getResult()}>
          =
        </span>
      </div>
    </div>
  );
}

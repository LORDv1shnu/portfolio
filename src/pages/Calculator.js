import React, { useState } from "react";
import "./Calculator.css";
import "../CardSection.css";

function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
    setResult("");
  };

  const handleEqual = () => {
    try {
      // eslint-disable-next-line no-eval
      setResult(eval(input).toString());
    } catch {
      setResult("Error");
    }
  };

  return (
    <section className="calculator-section card-section" aria-labelledby="calculator-heading">
      <h2 className="calculator-title" id="calculator-heading">Calculator</h2>
      <div className="calculator-display">
        <input
          type="text"
          value={input}
          readOnly
          className="calculator-input"
          aria-label="Calculator input"
        />
        <div className="calculator-result">{result}</div>
      </div>
      <div className="calculator-buttons">
        {["7","8","9","/","4","5","6","*","1","2","3","-","0",".","=","+"].map((btn) =>
          btn === "=" ? (
            <button key={btn} onClick={handleEqual} className="calculator-btn equal">=</button>
          ) : (
            <button key={btn} onClick={() => handleClick(btn)} className="calculator-btn">{btn}</button>
          )
        )}
        <button onClick={handleClear} className="calculator-btn clear">C</button>
      </div>
    </section>
  );
}

export default Calculator;

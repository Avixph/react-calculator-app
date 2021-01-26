import React, { useState, useEffect, useRef } from "react";

function Calc() {
  const [calcResult, setCalcResult] = useState("");
  const inputRef = useRef(null);

  useEffect(() => inputRef.current.focus());

  const handleClick = (event) => {
    event.preventDefault();
    setCalcResult(calcResult.concat(event.target.name));
  };

  const inputCalculation = (event) => {
    event.preventDefault();
    try {
      setCalcResult(eval(calcResult).toString());
    } catch (error) {
      setCalcResult("Calculation Error");
    }
  };

  const clearEntry = () => {
    setCalcResult(calcResult.slice(0, -1));
  };

  const clearAllEntry = () => {
    setCalcResult("");
  };

  return (
    <main className="app-main">
      <form action="" className="calculator">
        <input type="text" placeholder="0" value={calcResult} ref={inputRef} />
        <div className="keys">
          <button
            className="op-key-span"
            id="All-Clear"
            onClick={clearAllEntry}
          >
            AC
          </button>
          <button className="op-key" id="Clear" onClick={clearEntry}>
            C
          </button>
          <button className="op-key-pemdas" name="/" onClick={handleClick}>
            /
          </button>
          <button className="num-key" name="7" onClick={handleClick}>
            7
          </button>
          <button className="num-key" name="8" onClick={handleClick}>
            8
          </button>
          <button className="num-key" name="9" onClick={handleClick}>
            9
          </button>
          <button className="op-key-pemdas" name="*" onClick={handleClick}>
            &times;
          </button>
          <button className="num-key" name="4" onClick={handleClick}>
            4
          </button>
          <button className="num-key" name="5" onClick={handleClick}>
            5
          </button>
          <button className="num-key" name="6" onClick={handleClick}>
            6
          </button>
          <button className="op-key-pemdas" name="-" onClick={handleClick}>
            -
          </button>
          <button className="num-key" name="1" onClick={handleClick}>
            1
          </button>
          <button className="num-key" name="2" onClick={handleClick}>
            2
          </button>
          <button className="num-key" name="3" onClick={handleClick}>
            3
          </button>
          <button className="op-key-pemdas" name="+" onClick={handleClick}>
            +
          </button>
          <button className="num-key-span" name="0" onClick={handleClick}>
            0
          </button>
          <button className="num-key" name="." onClick={handleClick}>
            .
          </button>
          <button className="eq-key" id="result" onClick={inputCalculation}>
            =
          </button>
        </div>
      </form>
    </main>
  );
}

export default Calc;

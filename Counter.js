import React from "react";
import { useState } from "react";

const Counter = () => {
  let [counter, setCounter] = useState(0);
  console.log("rendering");
  return (
    <div className="cover">
      <h1>{counter}</h1>
      <button
        onClick={() => {
          console.log(counter);
          setCounter(counter + 1);
          setCounter(counter + 1);
          setCounter(counter + 1);
          console.log(counter); 
        }}
      >
        counter
      </button>
    </div>
  );
};

export default Counter;

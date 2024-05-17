// src/TestComponent.tsx
import React, { useState } from "react";

const TestComponent = () => {
  const [counter, setCounter] = useState<number>(0);
  return (
    <>
      <div>
        <h1>Counter:</h1>
        <div>
          <p>{counter}</p>
          <div>
            <button onClick={() => setCounter(prevCounter => prevCounter + 1)}>Increment</button>
            <button onClick={() => setCounter(prevCounter => prevCounter + -1)}>Decrement</button>
            <button onClick={() => setCounter(0)}>Restart</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestComponent;

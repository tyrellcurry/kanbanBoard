// src/TestComponent.tsx
import React, { useState } from "react";

const TestComponent = () => {
  const [counter, setCounter] = useState<number>(0);

  return (
    <>
      <div>
        <h1>Counter:</h1>
        <div>
          <p>0</p>
          <div>
            <button>Increment</button>
            <button>Decrement</button>
            <button>Restart</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestComponent;

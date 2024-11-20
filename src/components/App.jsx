import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

function App() {
  const [initialState, updateState] = useState(0);

  const incrementInitialState = () => updateState(initialState + 1);

  return (
    <div>
      <h1>Parent State: {initialState}</h1>
      <button onClick={incrementInitialState}>Increment Parent State</button>

      <ChildComponent />
    </div>
  );
}

export default App;

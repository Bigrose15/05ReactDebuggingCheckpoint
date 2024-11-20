import React, { useState } from "react";

function ChildComponent() {
  const [childState, setChildState] = useState(0); // State for the child component

  const incrementChildState = () => setChildState(childState + 1);

  return (
    <div>
      <h2>Child State: {childState}</h2>
      <button onClick={incrementChildState}>Increment Child State</button>
    </div>
  );
}

export default ChildComponent;

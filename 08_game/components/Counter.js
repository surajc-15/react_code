import React, { useState } from "react";

export default function Counter() {
  //const myStateArray = useState(0);
  const [count, setCount] = useState(0);
  console.log("rendering");
  return (
    <div style={{ textAlign: "center" }}>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 10); //setcount is like updating function
          console.log(count);
        }}
      >
        Increase count
      </button>
    </div>
  );
}

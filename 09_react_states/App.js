import React from "react";
import Applecounter from "./components/Applecounter";
import Basket from "./components/Basket";
import Counter from "./components/Counter";
function App() {
  return (
    <div className="app">
      <Counter />
      <h1>Apple counter</h1>
      <Applecounter />
    </div>
  );
}

// const Apps = () => {
//   return (
//     <div className="app">
//       <h1>Hello wrolds</h1>
//     </div>
//   );
// };

export default App;

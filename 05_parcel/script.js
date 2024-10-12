/*
// import React from "react";
// console.log(React);*/

// import ReactDOM from "react-dom";

import { createRoot } from "react-dom/client";
const h1 = <h1>Hello worldsd exploring hot reloading </h1>;
const root = createRoot(document.getElementById("root"));
console.log("surafdnksl");

root.render(h1);
if (module.hot) {
  module.hot.accept();
}

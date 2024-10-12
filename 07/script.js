/*
// import React from "react";
// console.log(React);*/

// import ReactDOM from "react-dom";

import { createRoot } from "react-dom/client";
console.log("surafdnksl");

const h1 = <h1>Hello worldsd exploring hot reloading </h1>;

// const card = (
//   <div className="card">
//     <img src="" alt="" />
//     <h2>South Indian Meal</h2>
//     <p>
//       Price:
//       <i class="fas fa-rupee-sign"></i>
//       <span>
//         <b>100</b>
//       </span>
//     </p>
//   </div>
// );

function cards(props) {
  const { key, title, image, brand, price } = props;
  return (
    <div className="card" key={key}>
      <img src={image} alt="" />
      <h2>{title}</h2>
      <h3>{brand}</h3>
      <p>
        Price:
        <span>
          <b>{price}</b>
        </span>
      </p>
    </div>
  );
}

// console.log(cards());
// const container = [card, card, card, card, card, card, card, card, card];
// const maincontainer = <div className="main">{container}</div>;
const root = createRoot(document.getElementById("root"));
//use fetch to get data from public api
console.log("extracting data from api");
fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    root.render(
      <div className="container">
        {data.products.map((product) => {
          return cards({
            image: product.thumbnail,
            key: product.id,
            title: product.title,
            brand: product.brand,
            price: product.price,
          });
        })}
      </div>
    );
  });
if (module.hot) {
  module.hot.accept();
}

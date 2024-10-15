import React from "react";

export default function Basket({ count, no }) {
  return (
    <div>
      <h2>{count} Apples</h2>
      <p>Basket{no}</p>
    </div>
  );
}

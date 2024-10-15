import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import Button from "./Button";
import LeftArrow from "../assets/leftarrow.png";
import RightArrow from "../assets/rightarrow.png";
import Basket from "./Basket";
const root = createRoot(document.getElementById("root"));

export default function Applecounter() {
  const totalApplecount = 10;
  const [leftAppleCount, setleftApplecount] = useState(10);
  const [rightApplecount, setrightApplecount] = useState(
    totalApplecount - leftAppleCount
  );
  return (
    <>
      <section className="mainapp">
        <Basket count={leftAppleCount} no="1" />
        <Button
          imageurl={LeftArrow}
          id={1}
          clickHandler={() => {
            setleftApplecount(leftAppleCount + 1);
            setrightApplecount(rightApplecount - 1);
          }}
        />
        <Button
          imageurl={RightArrow}
          id={2}
          clickHandler={() => {
            if (leftAppleCount - 1 >= 0) {
              setleftApplecount(leftAppleCount - 1);
              setrightApplecount(rightApplecount + 1);
            } else {
              alert("no more appllers");
            }
          }}
        />
        <Basket count={rightApplecount} no="2" />
      </section>

      <section>
        <button>Re render</button>
      </section>
    </>
  );
}

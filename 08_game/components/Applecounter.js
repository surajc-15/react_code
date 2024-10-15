import React from "react";
import { createRoot } from "react-dom/client";
import Button from "./Button";
import LeftArrow from "../assets/leftarrow.png";
import RightArrow from "../assets/rightarrow.png";
import Basket from "./Basket";
const root = createRoot(document.getElementById("root"));
const totalApplecount = 10;
let rightApplecount = 0;
let leftAppleCount = totalApplecount - rightApplecount;
export default function Applecounter() {
  return (
    <>
      <section className="mainapp">
        <Basket count={leftAppleCount} no="1" />
        <Button
          imageurl={LeftArrow}
          id={1}
          clickHandler={() => {
            console.log("left");
            if (rightApplecount - 1 >= 0) {
              leftAppleCount++;
              rightApplecount--;
            } else {
              alert("no more apples left");
            }
            console.log(leftAppleCount, rightApplecount);
            root.render(<Applecounter />);
          }}
        />
        <Button
          imageurl={RightArrow}
          id={2}
          clickHandler={() => {
            console.log("right");

            if (leftAppleCount - 1 >= 0) {
              leftAppleCount--;
              rightApplecount++;
            } else {
              alert("no more apples left");
            }
            console.log(leftAppleCount, rightApplecount);
            root.render(<Applecounter />);
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

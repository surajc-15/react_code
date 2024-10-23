import React from "react";
import "./CountriesListshimmer.css";
export default function CountriesListShimmer() {
  // const array=new Array(10).fill(1);

  //map return an array
  return (
    <>
      <div className="countries-container">
        {Array.from({ length: 10 }).map((el, i) => {
          console.log(el);
          return <div key={i} className="country-card shimmer-card"></div>;
        })}
      </div>
    </>
  );
}

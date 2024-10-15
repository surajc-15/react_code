import React from "react";

export default function Button({ imageurl, id, clickHandler }) {
  return (
    <div>
      <button>
        <img src={imageurl} alt="" id={id} onClick={clickHandler} />
      </button>
    </div>
  );
}

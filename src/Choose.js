import React from "react";
import img1 from "./images/Group 113.svg";
import "./styles/Choose.css";

function Choose() {
  return (
    <div className="choose">
      <div className="choose-left">
        <h1>Choose your destiny</h1>
        <p>
          Each unicorn has its own personality and symbolism. Get to know your
          new mascot and surround yourself with a strong ally. Thus choose the
          brave one and you will be able to face any situation. Take the sweet
          Cornelia and protect your health. If you need more luck, meet the
          Magic Cornelia! If you’re born to be bold, choose the Impetuous
          Cornelia : nothing will defeat you.
        </p>
        <button>Learn more about her story</button>
      </div>
      <div>
        <img src={img1} alt="" />
      </div>
    </div>
  );
}

export default Choose;

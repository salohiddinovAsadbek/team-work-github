import React from "react";
import "./styles/Magic.css";
import img1 from "./images/Your product.png";

function Magic() {
  return (
    <div className="magic">
      <div className="magic-top">
        <h1>Let the magic happen</h1>
        <p>
          Surround yourself with the most faithful companions and embark
          together on fantastic new adventures! Pocket, medium or XXL format,
          find the Cornelia that best suits your environment.
        </p>
        <p>
          <span>Oh, and don't worry:</span> Cornelia feeds on your bad vibes, no
          need to give her water or grass !
        </p>
      </div>
      <img src={img1} alt="" />
    </div>
  );
}

export default Magic;

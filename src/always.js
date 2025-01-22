import AlwaysLogo from "./images/always.svg";
import mouse from "./images/mouse.svg";
import "./styles/style.css";
import "./styles/always.css";

function Always() {
  return (
    <div className="always d-flex">
      <img src={AlwaysLogo} alt="logo" />
      <div>
        <h1>Always Go futher</h1>
        <p>
          Decline Cornelia as you wish! Black, dark grey, white, light grey,
          prussian blue ... Choose your colour, size and characteristics! And if
          that's not enough, personalise it to make it unique, in your own
          image. So open up the field of possibilities, the world is yours !
        </p>
        <div className="mouse">
          <img src={mouse} alt="mouse" />
          <p>SCROLL TO KNOW MORE</p>
        </div>
      </div>
    </div>
  );
}

export default Always;

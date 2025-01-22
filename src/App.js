// import Choose from "./Choose";
import Magic from "./Magic";
import React from "react";
import Navbar from "./Navbar/Navbar";
import "./styles/style.css";
import Home from "../src/home";
import Choose from "./Choose";
import Always from "./always";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Choose />
      <Always />
      <Magic />
    </div>
  );
}

export default App;

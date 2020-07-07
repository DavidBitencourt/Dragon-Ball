import React from "react";
import "./App.css";
import star from "./assets/star.svg";

function App() {
  return (
    <div className="App">
      <div className="group-balls">
        <div className="rotate-balls">
          <div className="ball">
            <img src={star} alt="star" />
          </div>
          <div className="ball">
            <img src={star} alt="star" />
          </div>
          <div className="ball">
            <img src={star} alt="star" />
          </div>
          <div className="ball">
            <img src={star} alt="star" />
          </div>
          <div className="ball">
            <img src={star} alt="star" />
          </div>
          <div className="ball">
            <img src={star} alt="star" />
          </div>
          <div className="ball">
            <img src={star} alt="star" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

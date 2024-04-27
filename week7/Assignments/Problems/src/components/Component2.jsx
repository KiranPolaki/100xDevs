/* eslint-disable no-unused-vars */
import { useState } from "react";

export function Component2() {
  const [gradient, seGradient] = useState([
    {
      id: 1,
      background: "rgb(2,0,36)",
      gradient:
        "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
    },
    {
      id: 2,
      background: "rgb(34, 193, 195)",
      gradient:
        "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)",
    },
    {
      id: 3,
      background: "rgb(131,58,180)",
      gradient:
        "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
    },
    {
      id: 4,
      background: "rgb(238,174,202)",
      gradient:
        "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
    },
    {
      id: 5,
      background: "#08AEEA",
      gradient: "linear-gradient(0deg, #08AEEA 0%, #2AF598 100%)",
    },
  ]);

  function handleGradientClick(gradient) {
    document.documentElement.style.background = gradient.gradient;
  }

  return (
    <>
      <div className="comp2-container">
        <p className="color">Pick any color</p>
        <div className="buttons-cont">
          {gradient.map((gradient) => (
            <button
              className="button-color"
              key={gradient.id}
              style={{
                background: gradient.gradient,
                color: "white",
                border: "none",
                padding: "10px",
                margin: "5px",
                cursor: "pointer",
              }}
              onClick={() => {
                handleGradientClick(gradient);
              }}
            ></button>
          ))}
        </div>
      </div>
    </>
  );
}

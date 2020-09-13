import React from "react";
import "./styles.css";
export default function App() {
  // let bmi = 83.91 / Math.pow(1.83, 2);
  const [height, setHeight] = React.useState("");
  const [weight, setWeight] = React.useState("");
  const [final, setFinal] = React.useState("");
  const [show, setShow] = React.useState(false);
  const handleHeight = (e) => {
    setHeight(e.target.value);
  };

  const handleWeight = (e) => {
    setWeight(e.target.value);
  };

  const result = (e) => {
    let bmi = (+weight / Math.pow(+height, 2)).toFixed(1);
    console.log(bmi);
    if (bmi < 18.5) {
      setFinal("Underweight");
    } else if (bmi >= 18.5 && bmi <= 25) {
      setFinal("Normal weight");
    } else if (bmi > 25 && bmi <= 30) {
      setFinal("Overweight");
    } else if (bmi > 30) {
      setFinal("Obese");
    }
    if (weight === "" || height === "") {
      setFinal("Please fill all inputs!");
    }
    setShow(true);
  };

  return (
    <div className="container-app">
      <div className="inner-container">
        <h1>BMI calculator</h1>
        {show ? (
          <p>
            Result: <b>{final.toUpperCase()}</b>
          </p>
        ) : null}
        <input
          type="text"
          placeholder="Enter your height (meters)..."
          onChange={handleHeight}
        />
        <input
          type="number"
          placeholder="Enter your weight (kilograms)..."
          onChange={handleWeight}
        />
        <button onClick={result}>CALCULATE</button>
      </div>
    </div>
  );
}

// bmi formula - kgs / height * height

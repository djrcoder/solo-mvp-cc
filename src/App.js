import React, { useState } from 'react';
import './App.css';
import InputForm from "./components/InputForm";


export default function App() {
  let distanceAdded = 0;
  let timeAdded = 0;

  const [totalDistance, setTotalDistance] = useState("");
  const [totalTime, setTime] = useState("");

  const addDistance = (item) => {
    setTotalDistance(totalDistance => [...totalDistance, item]);
  }
  const addTime = (item) => {
    setTime(totalTime => [...totalTime, item]);
  }

  if (totalDistance) {
    for (const el of totalDistance[0].chartDistance) {
      distanceAdded = distanceAdded + Number(el)
    }
  }

  if (totalTime) {
    for (const el of totalTime[0].totalTime) {
      timeAdded = timeAdded + Number(el)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <br />
        <br />
        <img src="unnamed.png" className="App-logo" alt="logo" />
        <p>
        </p>
      </header>
      <InputForm distanceAdder={addDistance} timeAdder={addTime} />
      <h2>Running Stats</h2>
      <br />
      <h3>Total distance: {distanceAdded} km</h3>
      <br />
      <h3>Total time: {timeAdded} mins</h3>
      <br />
    </div>
  );
}



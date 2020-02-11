import React, { useState } from 'react';
import './App.css';
import InputForm from "./components/InputForm";




const tableData = [];


// Render chart here 
// when button is clicked, chart will re-draw with the latest data




export default function App() {

  const [totalDistance, setTotalDistance] = useState("");
  const addDistance = (item) => {
    setTotalDistance(totalDistance => [...totalDistance, item]);
  }

  console.log("Distance is", totalDistance)

  if (totalDistance) {
    totalDistance.map(item => tableData.push(item))
  }



  // useEffect(() => {

  // }, [])

  console.log("Table data is", tableData)






  return (
    <div className="App">
      <header className="App-header">
        <br />
        <br />
        <img src="unnamed.png" className="App-logo" alt="logo" />
        <p>
        </p>
      </header>
      <InputForm distanceAdder={addDistance} />
    </div>
  );
}



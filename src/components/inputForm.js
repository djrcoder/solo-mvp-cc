import React, { useState } from "react";

export default () => {
    const [timeAndDate, setTimeAndDate] = useState("");
    const [distance, setDistance] = useState("");
    const [timeTaken, setTimeTaken] = useState("");
    const [nameOfRun, setNameOfRun] = useState("");


    const submitRun = () => {
        const inputDetails = {
            "Time and Date of Run": timeAndDate,
            "Distance": distance,
            "Time taken": timeTaken,
            "Name of run": nameOfRun
        }
        console.log("Submitted details", inputDetails)
    }


    // have submit run submit the information to the database


    return (

        <div>
            <input type="text" placeholder="Time and Date of Run" onChange={e => setTimeAndDate(e.target.value)} />
            <input type="text" placeholder="Distance" onChange={e => setDistance(e.target.value)} />
            <input type="text" placeholder="Time taken" onChange={e => setTimeTaken(e.target.value)} />
            <input type="text" placeholder="Name of run" onChange={e => setNameOfRun(e.target.value)} />
            <button onClick={submitRun}>Submit</button>
        </div>
    )

};
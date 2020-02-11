import React, { useState, useEffect } from "react";
import Moment from 'react-moment';
import axios from "axios"



export default function InputForm() {
    const [timeAndDate, setTimeAndDate] = useState("");
    const [distance, setDistance] = useState("");
    const [timeTaken, setTimeTaken] = useState("");
    const [nameOfRun, setNameOfRun] = useState("");
    const [fetchedData, setFetchedData] = useState([]);


    const submitRun = () => {
        const inputDetails = {
            "Time and Date of Run": timeAndDate,
            "Distance": distance,
            "Time taken": timeTaken,
            "Name of run": nameOfRun
        }




        console.log("Submitted details", inputDetails)
    }

    useEffect(() => {
        async function getData() {
            const result = await axios("api/runlog")
            // .then((res) => {
            // console.log(res.data)
            // setFetchedData(res.data.json)
            // console.log("Fetched Data", fetchedData)
            // });
            console.log(result)
            setFetchedData(result.data)
        }
        getData()

    }, []);

    console.log("Fetched", fetchedData)


    // const loadAllData = async () => {
    //     const response = await fetch("http://localhost:3000/api/runlog");
    //     const data = await response;
    //     setFetchedData(data.data)
    //     console.log("Hits", data.values)
    // }

    // have submit run submit the information to the database


    return (

        <div>
            <input type="text" placeholder="Time and Date of Run" onChange={e => setTimeAndDate(e.target.value)} />
            <input type="text" placeholder="Distance" onChange={e => setDistance(e.target.value)} />
            <input type="text" placeholder="Time taken" onChange={e => setTimeTaken(e.target.value)} />
            <input type="text" placeholder="Name of run" onChange={e => setNameOfRun(e.target.value)} />
            <button onClick={submitRun}>Submit</button>
            <ul>
                {fetchedData.map(item => (
                    <li key={item.id}>
                        Date of Run: <Moment parse="YYYY-MM-DD HH:mm">{item.time_and_date_of_run}</Moment> <br />
                        Location: {item.name_of_run}   <br />
                        Distance: {item.distance} kms  <br />
                        Time taken: {item.time_taken} mins  <br />
                        <br></br>
                    </li>
                ))}
            </ul>
        </div>
    )
};
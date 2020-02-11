import React, { useState, useEffect } from "react";
import Moment from 'react-moment';
import axios from "axios"
import { Bar } from 'react-chartjs-2';



export default function InputForm(props) {
    const [timeAndDate, setTimeAndDate] = useState("");
    const [distance, setDistance] = useState("");
    const [timeTaken, setTimeTaken] = useState("");
    const [nameOfRun, setNameOfRun] = useState("");
    const [fetchedData, setFetchedData] = useState([]);

    const disArray = [];
    const label = [];
    const chartDistance = [];


    const submitRun = (props) => {
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
            console.log(result)
            disArray.push(result)
            setFetchedData(result.data)

            // setDistance(result.data[0].distance)
        }
        getData()
    }, []);

    for (const obj of fetchedData) {
        label.push(obj.id)
        chartDistance.push(obj.distance)
    }

    const data = {
        labels: label,
        datasets: [
            {
                label: 'Distances in km',
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: chartDistance
            }
        ]
    };







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
            <div>
                <h2>Bar Example (custom size)</h2>
                <Bar
                    data={data}
                    width={150}
                    height={50}
                    options={{
                        maintainAspectRatio: true
                    }}
                />
            </div>
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
            <button onClick={(e) => {
                props.distanceAdder({ disArray })
            }}> Calculate Average Run</button>

        </div>
    )
};
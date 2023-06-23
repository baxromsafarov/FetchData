import React, { useEffect, useState } from "react";
import "./FetchApi.css";
const FetchApi = () =>{

    const [titles, setTiltles] = useState([]);

    useEffect(() =>{
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response) => response.json())
        .then(data => setTiltles(data))
    }, [])

    return(
        <div className="list">
            <ul>
               {titles.map((list, index)=> (
                <li key={index}><span>Fetch Title</span>: {list.title}<br/></li> 
               ))}
            </ul>
        </div>
    );
}

export default FetchApi; 
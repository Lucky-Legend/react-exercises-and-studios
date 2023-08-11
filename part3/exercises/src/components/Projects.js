import data from "./../data.json";
import {useState} from "react";

function MyProjects() {
    const [index, setIndex] = useState(0);
    const projects = data.projects;
    
    function handleClick() {
        if (index < projects.length-1)
        {
           setIndex(index + 1);
        }
        else 
        {
           setIndex(0);
        }
     }

    return (
        <div>
        <button onClick={handleClick}>Next</button>
        <h2 style={{color:"navy"}}>Project Details</h2>
        <h3 style={{color:"green"}}>{projects[index].title}</h3>
        <p>{projects[index].description}</p>
        <p>Start date: {projects[index].date}</p>
        <img src={projects[index].image} alt={projects[index].title}/>
        </div>
    )
}

export default MyProjects;
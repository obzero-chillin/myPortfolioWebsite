import ProjectCard from "./subComponents/projectCard";
import './css/projects.css'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Projects = ()=>{
    const location = useLocation()
    useEffect(()=>{
        const hash = location.hash.slice(1)
        if(hash){
            const element = document.getElementById(hash);
            console.log(element)
            if(element){
                element.scrollIntoView()
            }
        }
    },[location.hash])
    return(
        <>
        <h1>Projects</h1>
        
        <div id="projects">
            <ProjectCard />
            
        
        </div>
        
        </>
        
    )


}

export default Projects;
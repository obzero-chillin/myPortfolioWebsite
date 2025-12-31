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
        <div id="projects">

        <h1 id="projectTopic">Projects</h1>
        
        <div id="project">
            <ProjectCard 
                topic="Feature Flag Service"
                description="A service for managing feature flags in a microservices architecture."
                link='https://github.com/obzero-chillin/Feature_flags'
                linkName='Github'
            
            
            />
            
        
        </div>

        </div>
        
        </>
        
    )


}

export default Projects;
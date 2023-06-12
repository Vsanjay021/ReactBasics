import {MOCK_PROJECTS} from "./cardData"
import ProjectList from "./projectList"
import {Project} from "./project"
import { useState } from "react"

function Cards(){

    let [projects,setProjects]=useState<Project[]>(MOCK_PROJECTS)
    const projectSave=(project:Project)=>{
        let updatedProject=projects.map((p:Project)=>{
            return project.id===p.id ? project : p
        });
        setProjects(updatedProject)
    }

    return(
        <>
        <h1>Project Data</h1>
        <ProjectList  onSave={projectSave} data={projects} />
        </>
    )
}
export default Cards
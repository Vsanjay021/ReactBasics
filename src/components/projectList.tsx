import { Project } from "./project";
import ProjectSingleCard from "./ProjectSingleCard";
import ProjectForm from "./ProjectForm"
import { useState } from "react";

let display_flex = {
  width: "80%",
  display: "flex",
  margin: "auto"
}
interface ProjectListProps{
  data:Project[];
  onSave:(project:Project)=>void;
}
function ProjectList({ data ,onSave}: ProjectListProps) {



  const [projectBeingEdited, setProjectBeingEdited] = useState({});

  const handleEdit = (project: Project) => {
    setProjectBeingEdited(project)
  };

  const onCancelEditing=()=>{
    setProjectBeingEdited({})
  }

  return (
    <div className="row" style={display_flex}>
      {data.map((data: Project) => (
        <div key={data.id} className="cols-sm">
          {/* <ProjectSingleCard item={data} onEdit={handleEdit}/>
                 <ProjectForm/> */}
          {data === projectBeingEdited ? (
            <>
            <ProjectSingleCard item={data} onEdit={handleEdit} />
            <ProjectForm onCancel={onCancelEditing} onSave={onSave} project={data}/>
            </>
            
          ) : (
            <ProjectSingleCard item={data} onEdit={handleEdit} />
          )}
        </div>
      ))}
    </div>
  )
}
export default ProjectList
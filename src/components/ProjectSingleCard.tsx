import { Project } from "./project";

interface ProjectCardProps {
    item: Project,
    onEdit: (project: Project) => void;
  }
  
  let imgStyle={
    width:"100px"
}
function ProjectSingleCard(props: ProjectCardProps){
  const { item,onEdit} = props;
  const handleClickEvent=(project:Project)=>{
    onEdit(project);
  }
    return (
        <div className="card">
          <img style={imgStyle} src={item.imageUrl} alt={item.name} />
          <section className="section dark">
            <h5 className="strong">
              <strong>{item.name}</strong>
            </h5>
            <p>{item.description}</p>
            <p>Budget : {item.budget.toLocaleString()}</p>
            <button onClick={()=>handleClickEvent(item)}>Edit</button>
          </section>
        </div>
      );
}
export default ProjectSingleCard

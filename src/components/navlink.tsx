import { NavLink } from "react-router-dom";
import "../index.css"
let navbar = {
    border: "1px solid black",
    marginTop: "10px",
    height: "auto",
    padding: "10px"
}
let styleFn=({isActive}:any)=>{
    return isActive  
    ? {
    border: "1px solid black",
    textDecoration: "none",
    marginRight: "50px",
    padding: "5px",
    color:"red"}
    : {border: "1px solid black",
    textDecoration: "none",
    marginRight: "50px",
    padding: "5px"}
}
function Navbar(){
    return (
        <div className="navbar" style={navbar}>
                <NavLink to="/" style={styleFn} >Home</NavLink>
                <NavLink to="/project" style={styleFn} >Projects</NavLink>
            </div>
    )
}
export default Navbar
import { FaTimes } from "react-icons/fa"

const Taskcard = ({ e, onDelete, onToggle }) => {
  return (
    <div className={`task ${e.reminder ? "reminder" : ""}`} onDoubleClick={() => onToggle(e.id)}>
      <h3>{e.text} <FaTimes style={{ color:'red' , cursor:"pointer"}} onClick={()=>onDelete(e.id)} /> </h3>
      <p>{e.day}</p>
    </div>
  )
}

export default Taskcard
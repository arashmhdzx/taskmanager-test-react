import Taskcard from "./Taskcard"

const Tasks = ({ taskslist, onDelete, onToggle }) => {
return (
    <div>
      {taskslist.map((e) => (
        <Taskcard key={e.id} e={e} onDelete={onDelete} onToggle={onToggle} />
        )
      )}
    </div>
  )
}

export default Tasks
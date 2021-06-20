import React,{useState} from 'react'
import Header from "./components/Header"
import Tasks from "./components/Tasks"
import AddTask from './components/AddTask'


export default function App() {

  const [showAddTask,setShowAddTask] = useState(false)

  const [taskslist,setTaskslist] = useState ([
    {
    id: 1,
    text: "coding",
    day: "Feb 5th 2001",
    reminder: true,
  },{
    id: 2,
    text: "Sleeping",
    day: "Jun 21th 2021",
    reminder: false,
  },{
    id: 3,
    text: "Eating",
    day: "Agu 24th 2012",
    reminder: true,
  }
  ])

  //Add task
  const addNewTasks = (data) => {
    const newid = Math.floor(Math.random * 10000) + 1
    const newTask = { newid , ...data }
    setTaskslist([ ...taskslist , newTask ])
  }

  // delete tasks
 const deleteTask = (id) => {
   setTaskslist(taskslist.filter((task)=>task.id !== id))
 }

 const toggleReminder = (id) => {
   setTaskslist(taskslist.map((task) => task.id === id ? { ...task , reminder: !task.reminder } : task))
 }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} changeBtn={showAddTask}/>
      {showAddTask && <AddTask onAdd={addNewTasks} />}
      {taskslist.length < 1 ? "Nothing to show" : <Tasks taskslist={taskslist} onDelete={deleteTask} onToggle={toggleReminder}/>}
    </div>
  )
}

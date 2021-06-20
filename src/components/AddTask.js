import { useState } from "react"

const AddTask = ({ onAdd }) => {
  const [text,setText] = useState("")
  const [day,setDay] = useState("")
  const [reminder,setReminder] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    if (!text && !day){
      alert("Please enter subject")
      return
    }
    if(!day){
      alert("please add Date")
      return
    }
    onAdd({ text, day, reminder })

    setText("")
    setDay("")
    setReminder(false)
  }

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
          <input type="text" placeholder="Add Task Subject" value={text} onChange={(x) => setText(x.target.value)} />
        </div>
        <div className="form-control">
        <label>Day & time</label>
          <input type="text" placeholder="Add Time" value={day} onChange={(x) => setDay(x.target.value)} />
        </div>
        <div className="form-control form-control-check">
        <label>Set Reminder</label>
          <input type="checkbox" checked={reminder} value={reminder} onChange={(x) => setReminder(x.currentTarget.checked)} />
        </div>
        <input type="submit" value="Save Task" className="btn btn-block" />    
      
    </form>
  )
}

export default AddTask
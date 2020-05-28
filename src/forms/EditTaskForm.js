import React, { useState, useEffect } from 'react'

const EditTaskForm = props => {
  const [ Task, setTask ] = useState(props.currentTask)

  useEffect(
    () => {
      setTask(props.currentTask)
    },
    [ props ]
  )
  // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]

  const handleInputChange = event => {
    const { name, value } = event.target

    setTask({ ...Task, [name]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()

        props.updateTask(Task.id, Task)
      }}
    >
      <label>Task</label>
      <input type="text" name="name" value={Task.name} onChange={handleInputChange} />
       <button>Update Task</button>
      <button onClick={() => props.setEditing(false)} className="button muted-button">
        Cancel
      </button>
    </form>
  )
}

export default EditTaskForm

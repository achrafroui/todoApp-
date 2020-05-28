import React from 'react'

const TaskTable = props => (
  <table>
    <thead>
      <tr>
        <th>Tasks</th>
        
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.Tasks.length > 0 ? (
        props.Tasks.map(Task => (
          <tr key={Task.id}>
            <td>{Task.name}</td>
          
            <td>
              <button
                onClick={() => {
                  props.editRow(Task)
                }}
                className="button muted-button"
              >
                Edit
              </button>
              <button
                onClick={() => props.deleteTask(Task.id)}
                className="button muted-button"
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No tasks</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default TaskTable

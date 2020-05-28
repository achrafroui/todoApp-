import React, { useState, Fragment } from 'react'
import AddTaskForm from './forms/AddTaskForm'
import EditTaskForm from './forms/EditTaskForm'
import TaskTable from './tables/TaskTable'

const App = () => {
	// Data
	const TasksData = [
		{ id: 1, name: 'Feed the dog'},
		{ id: 2, name: 'Watch Netflix'},
		{ id: 3, name: 'have lunch with family'},
	]

	const initialFormState = { id: null, name: '' }

	// Setting state
	const [ Tasks, setTasks ] = useState(TasksData)
	const [ currentTask, setCurrentTask ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)

	// CRUD operations
	const addTask = Task => {
		Task.id = Tasks.length + 1
		setTasks([ ...Tasks, Task ])
	}

	const deleteTask = id => {
		setEditing(false)

		setTasks(Tasks.filter(Task => Task.id !== id))
	}

	const updateTask = (id, updatedTask) => {
		setEditing(false)

		setTasks(Tasks.map(Task => (Task.id === id ? updatedTask : Task)))
	}

	const editRow = Task => {
		setEditing(true)

		setCurrentTask({ id: Task.id, name: Task.name})
	}

	return (
		<div className="container">
			<h1>To Do App</h1>
			<div className="flex-row">
				<div className="flex-large">
					{editing ? (
						<Fragment>
							<h2>Edit Task</h2>
							<EditTaskForm
								editing={editing}
								setEditing={setEditing}
								currentTask={currentTask}
								updateTask={updateTask}
							/>
						</Fragment>
					) : (
						<Fragment>
							<h2>Add Task</h2>
							<AddTaskForm addTask={addTask} />
						</Fragment>
					)}
				</div>
				<div className="flex-large">
					<h2>View Tasks</h2>
					<TaskTable Tasks={Tasks} editRow={editRow} deleteTask={deleteTask} />
				</div>
			</div>
		</div>
	)
}

export default App

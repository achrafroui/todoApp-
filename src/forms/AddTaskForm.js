import React, { useState } from 'react'

const AddTaskForm = props => {
	const initialFormState = { id: null, name: ''}
	const [ Task, setTask ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setTask({ ...Task, [name]: value })
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!Task.name) return

				props.addTask(Task)
				setTask(initialFormState)
			}}
		>
			<label>What's next ?</label>
			<input type="text" name="name" value={Task.name} onChange={handleInputChange} />
			<button>Add new Task</button>
		</form>
	)
}

export default AddTaskForm

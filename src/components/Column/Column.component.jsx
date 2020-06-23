import React, { useState, useEffect } from 'react';
import MutableInput from '../MutableInput/MutableInput.component';
import Task from '../Task/Task.component';
import AddTask from '../AddTask/AddTask.component';
// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

function Column({ name, data, addNewTask, changeTitleName, index }) {
	const [ title, titleSet ] = useState(name);

	return (
		<div id="column">
			<div id="title">
				<MutableInput
					value={title}
					valueSet={titleSet}
					placeHolder="Enter list title..."
					changeTitleName={changeTitleName}
					index={index}
				/>
				<div id="menu">...</div>
			</div>
			<div id="taskbar">{data.map((taskData, i) => <Task data={taskData} key={i} />)}</div>
			<AddTask addNewTask={addNewTask} index={index} />
		</div>
	);
}

export default Column;

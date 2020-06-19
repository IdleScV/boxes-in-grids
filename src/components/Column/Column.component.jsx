import React, { useState, useEffect } from 'react';
import MutableInput from '../MutableInput/MutableInput.component';
import Task from '../Task/Task.component';

function Column({ name, data, tasksSet }) {
	const [ title, titleSet ] = useState(null);
	useEffect(
		() => {
			titleSet(name);
		},
		[ name ]
	);

	return (
		<div id="column">
			<div id="title">
				<MutableInput value={title} valueSet={titleSet} placeHolder="Enter list title..." />
				<div id="menu">...</div>
			</div>
			{data.map((taskData, i) => <Task data={taskData} key={i} />)}
		</div>
	);
}

export default Column;

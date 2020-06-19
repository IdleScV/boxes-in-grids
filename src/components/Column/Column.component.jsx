import React, { useState, useEffect } from 'react';

import Task from '../Task/Task.component';

function Column({ name, data, tasksSet }) {
	const [ titleChange, titleChangeSet ] = useState(false);
	const [ currentFocus, currentFocusSet ] = useState(undefined);

	const handleTitleClick = (targetValue) => {
		currentFocusSet(targetValue);

		titleChangeSet(true);
	};

	const handleTitleChange = (e) => {
		currentFocusSet(e.target.value);
	};

	const handleKeyDown = (e) => {
		console.log(e);
	};

	return (
		<div id="column">
			{titleChange ? (
				<input type="text" value={currentFocus} onChange={handleTitleChange} onKeyDown={handleKeyDown} />
			) : (
				<h2 onClick={() => handleTitleClick(name)}>{name}</h2>
			)}

			{data.map((taskData, i) => <Task data={taskData} key={i} />)}
		</div>
	);
}

export default Column;

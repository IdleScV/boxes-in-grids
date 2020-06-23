import React, { useState, useEffect } from 'react';
import Column from '../Column/Column.component';
import '../Style/Board.layout.scss';
const initialState = {
	tasks: [
		{
			title: 'Morning',
			data: [
				{ title: 'morning task' },
				{
					title:
						'another morning tasks. another morning tasks another morning tasks. another morning tasks another morning tasks'
				},
				{ title: 'another morning tasks' },
				{ title: 'another morning tasks' },
				{ title: 'another morning tasks' },
				{ title: 'another morning tasks' },
				{ title: 'another morning tasks' }
			]
		},
		{
			title: 'Morning',
			data: [
				{ title: 'morning task' },
				{
					title:
						'another morning tasks. another morning tasks another morning tasks. another morning tasks another morning tasks'
				},
				{ title: 'another morning tasks' },
				{ title: 'another morning tasks' },
				{ title: 'another morning tasks' },
				{ title: 'another morning tasks' },
				{ title: 'another morning tasks' }
			]
		}
	]
};

function Board() {
	const [ tasks, tasksSet ] = useState(initialState['tasks']);
	const [ render, renderSet ] = useState(false);

	const addNewTask = (index, newTaskString) => {
		let newTask = { title: newTaskString };
		console.log('tasks before', tasks);
		tasks[index]['data'].push(newTask);
		console.log('tasks after', tasks);
		tasksSet(tasks);

		renderSet(!render);
	};

	const changeTitleName = (index, newKey) => {
		console.log('changeTitleName');
		tasks[index]['title'] = newKey;
		tasksSet(tasks);
	};

	useEffect(() => {}, [ tasks ]);

	return (
		<div id="board">
			{tasks ? (
				<React.Fragment>
					{tasks.map((group, i) => (
						<Column
							name={group.title}
							changeTitleName={changeTitleName}
							data={group.data}
							index={i}
							key={i}
							addNewTask={addNewTask}
						/>
					))}
				</React.Fragment>
			) : (
				<div>No Task Data</div>
			)}
		</div>
	);
}

export default Board;

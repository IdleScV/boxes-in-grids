import React, { useState, useEffect } from 'react';
import Column from '../Column/Column.component';
import '../Style/Board.layout.css';
const initialState = {
	tasks: {
		Morning: [ { title: 'morning task' }, { title: 'another morning tasks' } ],
		Evening: [ { title: 'Evening task' }, { title: 'another Evening tasks' } ]
	}
};

function Board() {
	const [ tasks, tasksSet ] = useState(undefined);

	useEffect(() => {
		tasksSet(initialState['tasks']);
	}, []);

	return (
		<div id="board">
			{tasks ? (
				<React.Fragment>
					{Object.keys(tasks).map((group, i) => (
						<Column name={group} tasksSet={tasksSet} data={tasks[group]} key={i} />
					))}
				</React.Fragment>
			) : null}
		</div>
	);
}

export default Board;

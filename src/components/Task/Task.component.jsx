import React, { useState } from 'react';

function Task({ data }) {
	const [ hover, hoverSet ] = useState(false);

	return (
		<div id="task" onMouseEnter={() => hoverSet(true)} onMouseLeave={() => hoverSet(false)}>
			<div>{data.title}</div>
			{hover ? <div className="edit">:::</div> : null}
		</div>
	);
}

export default Task;

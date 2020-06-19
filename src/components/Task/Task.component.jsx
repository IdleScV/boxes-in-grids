import React, { useState } from 'react';

function Task({ data }) {
	const [ hover, hoverSet ] = useState(false);

	const style = {
		component: {
			border: 'solid 1px black',
			height: '100%',
			margin: '4px 0px',
			borderRadius: '5px',
			padding: '5px',
			position: 'relative'
		},
		editButton: {
			position: 'absolute',
			top: '4px',
			right: '5px'
		}
	};

	const hoverStyle = {
		component: {
			...style.component,
			backgroundColor: 'grey'
		}
	};

	return (
		<div
			id="task"
			style={hover ? hoverStyle.component : style.component}
			onMouseEnter={() => hoverSet(true)}
			onMouseLeave={() => hoverSet(false)}
		>
			<div>{data.title}</div>
			{hover ? (
				<div id="edit" style={style.editButton}>
					:::
				</div>
			) : null}
		</div>
	);
}

export default Task;

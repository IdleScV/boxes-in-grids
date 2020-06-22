import React, { useState, useRef, useEffect } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import './AddTask.style.scss';
function AddTask() {
	const [ edit, editSet ] = useState(false);
	const [ text, textSet ] = useState('');
	const inputField = useRef(null);

	const handleKeyPress = (e) => {
		if (e.key === 'Enter' || e === 'outside') {
			editSet(false);
		}
	};
	function auto_grow(e) {
		e.target.style.height = e.target.scrollHeight + 'px';
	}

	useEffect(
		() => {
			if (edit) {
				inputField.current.focus();
			}
		},
		[ edit ]
	);

	return (
		<OutsideClickHandler onOutsideClick={() => handleKeyPress('outside')}>
			{edit ? (
				<div id="add-card-menu">
					<div>
						<input
							onInput={auto_grow}
							className="text-area"
							type="textarea"
							placeholder="Enter a title for this card..."
							ref={inputField}
						/>
					</div>
					<div className="options">
						<div id="add">Add Card</div>
						<div id="close">X</div>
						<div id="menu">...</div>
					</div>
				</div>
			) : (
				<div id="last-column-item">
					<div id="add-task" onClick={() => editSet(true)}>
						+ Add a task
					</div>
					<div id="create-from-template">:::</div>
				</div>
			)}
		</OutsideClickHandler>
	);
}

export default AddTask;

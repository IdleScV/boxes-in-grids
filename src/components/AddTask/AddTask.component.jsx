import React, { useState, useRef, useEffect } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import './AddTask.style.scss';
function AddTask({ addNewTask, index }) {
	const [ edit, editSet ] = useState(false);
	const [ text, textSet ] = useState(undefined);
	const inputField = useRef(null);

	const handleChange = (e) => {
		textSet(e.target.value);
	};

	const handleKeyPress = (e) => {
		if (e.key === 'Enter' || e === 'outside' || e === 'submit') {
			editSet(false);

			if (text) {
				addNewTask(index, text);
			}
		}
		if (e === 'cancel') {
			editSet(false);
			textSet(undefined);
		}
	};

	const openTextArea = () => {
		editSet(true);
	};

	const openTemplate = () => {
		console.log('opening template menu');
	};

	//* Resets field with new text se~t
	useEffect(
		() => {
			textSet(undefined);
		},
		[ addNewTask ]
	);

	// focuses on input field
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
						<textarea
							id="text-area"
							type="textarea"
							value={text}
							onChange={handleChange}
							onKeyDown={handleKeyPress}
							placeholder="Enter a title for this card..."
							ref={inputField}
							rows="5"
						/>
					</div>
					<div className="options">
						<button id="add" onClick={() => handleKeyPress('submit')}>
							Add Card
						</button>
						<button id="close" onClick={() => handleKeyPress('cancel')}>
							X
						</button>
						<button id="menu" onClick={openTemplate}>
							...
						</button>
					</div>
				</div>
			) : (
				<div id="last-column-item">
					<div id="add-task" onClick={openTextArea}>
						+ Add a task
					</div>
					<div id="create-from-template" onClick={openTemplate}>
						:::
					</div>
				</div>
			)}
		</OutsideClickHandler>
	);
}

export default AddTask;

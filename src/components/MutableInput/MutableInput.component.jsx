import React, { useState, useRef, useEffect } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';

import './MutableInput.style.scss';

function MutableInput({ value, valueSet, placeHolder, changeTitleName, index }) {
	const currentField = useRef(null);
	const [ edit, editSet ] = useState(false);

	//* Initiates textarea onClick, selects all text & creates sets height
	useEffect(
		() => {
			if (edit) {
				currentField.current.select();

				currentField.current.style.height =
					currentField.current.scrollHeight === 45
						? currentField.current.scrollHeight - 15 + 'px'
						: currentField.current.scrollHeight + 'px';
			}

			changeTitleName(index, value);
		},
		[ edit ]
	);

	//* Enter key & outsideclick handler | size changer
	const handleKeyPress = (e) => {
		if (e.key === 'Enter' || e === 'outside') {
			if (value === '') {
				valueSet(placeHolder);
			}
			editSet(false);
		}
		if (e.target) {
			console.log(e.target.scrollHeight);
			e.target.style.height = e.target.scrollHeight + 'px';
		}
	};

	//* Handles value change & trims spaces in the beginning
	const handleInputChange = (e) => {
		valueSet(e.target.value.trimStart());
	};

	return (
		<OutsideClickHandler onOutsideClick={() => handleKeyPress('outside')}>
			<div id="mi">
				{edit ? (
					<textarea
						id="mi-textarea"
						type="text"
						value={value}
						onChange={handleInputChange}
						onKeyPress={handleKeyPress}
						ref={currentField}
						rows="1"
					/>
				) : (
					<div onClick={() => editSet(true)} id="mi-div">
						{value}
					</div>
				)}
			</div>
		</OutsideClickHandler>
	);
}

export default MutableInput;

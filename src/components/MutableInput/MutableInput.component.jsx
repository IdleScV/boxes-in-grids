import React, { useState, useRef, useEffect } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';

import './MutableInput.style.scss';

function MutableInput({ value, valueSet, placeHolder, size }) {
	const currentField = useRef(null);
	const [ edit, editSet ] = useState(false);

	function auto_grow(e) {
		e.target.style.height = e.target.scrollHeight + 'px';
	}

	//* Initiates textarea onClick, selects all text & creates sets height
	useEffect(
		() => {
			if (edit) {
				currentField.current.select();
				currentField.current.style.height = currentField.current.scrollHeight + 'px';
			}
		},
		[ edit ]
	);

	//* Enter key & outsideclick handler
	const handleKeyPress = (e) => {
		if (e.key === 'Enter' || e === 'outside') {
			if (value === '') {
				valueSet(placeHolder);
			}
			editSet(false);
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
						onInput={auto_grow}
						type="text"
						value={value}
						onChange={handleInputChange}
						onKeyPress={handleKeyPress}
						ref={currentField}
						rows="1"
					/>
				) : (
					<div
						// style={style.div}
						onClick={() => editSet(true)}
						id="mi-div"
					>
						{value}
					</div>
				)}
			</div>
		</OutsideClickHandler>
	);
}

export default MutableInput;

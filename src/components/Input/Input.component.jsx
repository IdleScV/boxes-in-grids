import React, { useState, useRef } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';

function Input({ value, valueSet }) {
	const textInput = useRef(null);
	const [ edit, editSet ] = useState(false);

	function handleClick() {
		editSet(true);
		textInput.current.focus();
	}

	return (
		<OutsideClickHandler onOutsideClick={() => editSet(false)}>
			{edit ? (
				<input
					type="text"
					value={value}
					onChange={(e) => {
						valueSet(e.target.value);
					}}
					ref={textInput}
				/>
			) : (
				<div onClick={handleClick}>{value}</div>
			)}
		</OutsideClickHandler>
	);
}

export default Input;

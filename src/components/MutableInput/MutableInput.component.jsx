import React, { useState, useRef, useEffect } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';

function MutableInput({ value, valueSet, placeHolder, size }) {
	const currentField = useRef(null);
	const [ edit, editSet ] = useState(false);

	//* Styling
	const sharedStyle = {
		paddingTop: '0',
		paddingBottom: '0',
		height: '30px',
		fontSize: size === 'small' ? '20px' : size === 'large' ? '40px' : '30px',
		fontFamily: 'Times New Roman, Times, serif',
		paddingLeft: '5px',
		width: '90%',
		height: '100%',
		clear: 'both'
	};
	const style = {
		input: {
			...sharedStyle,
			marginTop: '-2px',
			marginBottom: '8px',
			marginLeft: '-2px',
			border: '2px solid blue',
			borderRadius: '4px',
			resize: 'none',
			overflow: 'hidden',
			minHeight: '30px',
			maxHeight: '500px'
		},
		div: {
			...sharedStyle,
			marginBottom: '10px',
			overflowWrap: 'break-word'
		}
	};

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
			{edit ? (
				<textarea
					onInput={auto_grow}
					style={style.input}
					className=""
					type="text"
					value={value}
					onChange={handleInputChange}
					onKeyPress={handleKeyPress}
					ref={currentField}
					rows="1"
				/>
			) : (
				<div style={style.div} onClick={() => editSet(true)}>
					{value}
				</div>
			)}
		</OutsideClickHandler>
	);
}

export default MutableInput;

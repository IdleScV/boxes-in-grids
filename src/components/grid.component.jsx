import React, { useEffect } from 'react';
import './grid.style.scss';

function Grid({ matrix, changeOneBlock, blockSize, selectedSet, selected }) {
	console.log(matrix);
	return (
		<div id="grid">
			{matrix.map((array, r) => (
				<div className="row" key={r}>
					{array.map((value, c) => (
						<div
							key={c}
							className={`box ${value === 1 ? 'white' : 'black'}`}
							id={r === selected[0] && c === selected[1] ? 'selected' : null}
							style={{ width: blockSize + 'px', height: blockSize + 'px' }}
							onClick={() => selectedSet([ r, c ])}
						/>
					))}
				</div>
			))}
		</div>
	);
}

export default Grid;

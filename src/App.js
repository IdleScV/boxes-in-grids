import React, { useState, useEffect } from 'react';

import './App.css';

import Grid from './components/grid.component';

function App() {
	const [ size, sizeSet ] = useState(5);
	const [ blockSize, blockSizeSet ] = useState(50);
	const [ matrix, matrixSet ] = useState([ [ 0 ] ]);
	const [ selected, selectedSet ] = useState([ null, null ]);

	useEffect(
		() => {
			var matrix = [];
			for (var i = 0; i < size; i++) {
				matrix[i] = [];
				for (var j = 0; j < size; j++) {
					matrix[i][j] = 0;
				}
			}
			matrixSet(matrix);
		},
		[ size ]
	);

	const convertAllBlocks = () => {
		matrixSet(matrix.map((r) => r.map((c) => (c === 1 ? 0 : 1))));
	};

	const changeOneBlock = (rn, cn) => {
		matrixSet(
			matrix.map((r, ri) =>
				r.map((c, ci) => {
					if (ri === rn && ci === cn) {
						if (c === 0) {
							return 1;
						} else {
							return 0;
						}
					} else {
						return c;
					}
				})
			)
		);
	};

	const reset = (size) => {
		var matrix = [];
		for (var i = 0; i < size; i++) {
			matrix[i] = [];
			for (var j = 0; j < size; j++) {
				matrix[i][j] = 0;
			}
		}
		matrixSet(matrix);
		selectedSet([ null, null ]);
	};

	const bloom = (cord) => {
		let arr = [];
		if (cord[0] + 1 < matrix.length) {
			arr.push([ cord[0] + 1, cord[1] ]);
		}
		if (cord[1] + 1 < matrix.length) {
			arr.push([ cord[0], cord[1] + 1 ]);
		}
		if (cord[0] - 1 > -1) {
			arr.push([ cord[0] - 1, cord[1] ]);
		}
		if (cord[1] - 1 > -1) {
			arr.push([ cord[0], cord[1] - 1 ]);
		}

		let original = matrix;
		for (let i = 0; i < arr.length; i++) {
			original[arr[i][0]][arr[i][1]] === 1
				? (original[arr[i][0]][arr[i][1]] = 0)
				: (original[arr[i][0]][arr[i][1]] = 1);
		}

		matrixSet(original);
		selectedSet([ null, null ]);
	};

	return (
		<div className="App">
			<Grid
				matrix={matrix}
				blockSize={blockSize}
				changeOneBlock={changeOneBlock}
				selectedSet={selectedSet}
				selected={selected}
			/>

			<div>
				<button onClick={convertAllBlocks}>Convert To Black</button>

				<button onClick={() => reset(size)}>reset</button>

				<button onClick={() => bloom(selected)} disabled={selected[0] == null}>
					Bloom
				</button>
			</div>
			<div>
				<input
					type="number"
					min="5"
					step="1"
					value={size}
					onChange={(e) => {
						sizeSet(e.target.value);
					}}
				/>
				<input
					type="number"
					min="5"
					step="1"
					value={blockSize}
					onChange={(e) => {
						blockSizeSet(e.target.value);
					}}
				/>
			</div>
		</div>
	);
}

export default App;

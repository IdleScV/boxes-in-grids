import React, { useState } from 'react';

import './App.css';

import Board from './components/Board/Board.component';
import Input from './components/Input/Input.component';

function App() {
	const [ form1, form1Set ] = useState('Starting Words');
	const [ form2, form2Set ] = useState('Starting Words');
	const [ form3, form3Set ] = useState('Starting Words');
	const [ form4, form4Set ] = useState('Starting Words');
	const [ form5, form5Set ] = useState('Starting Words');
	return (
		<div className="App">
			{/* <Board /> */}
			<Input value={form1} valueSet={form1Set} />
			<Input value={form2} valueSet={form2Set} />
			<Input value={form3} valueSet={form3Set} />
			<Input value={form4} valueSet={form4Set} />
			<Input value={form5} valueSet={form5Set} />
		</div>
	);
}

export default App;

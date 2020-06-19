import React, { useState } from 'react';

// import './Reset.css';

import Board from './components/Board/Board.component';
import MutableInput from './components/MutableInput/MutableInput.component';

function App() {
	const [ form1, form1Set ] = useState('Starting Words');
	const [ form2, form2Set ] = useState('Starting Words');
	const [ form3, form3Set ] = useState('Starting Words');
	const [ form4, form4Set ] = useState('Starting Words');
	const [ form5, form5Set ] = useState('Starting Words');
	return (
		<div className="App">
			<Board />
			<div id="test-box">
				<MutableInput value={form1} valueSet={form1Set} />
				<MutableInput value={form2} valueSet={form2Set} />
			</div>
		</div>
	);
}

export default App;

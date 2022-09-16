import './App.css';
import {useState} from 'react';

function App() {
	const [notes, setNotes] = useState([1, 2, 3, 4, 5]);
	
	function handleClick1 () {
		let copy = Object.assign([], notes);
		copy.push(copy.length + 1);
		setNotes(copy)
	}

	function handleClick2 () {
		let copy = Object.assign([], notes);
		copy.splice(copy.length - 2, 1);
		setNotes(copy)
	}

	function handleClick3 () {
		let copy = Object.assign([], notes);
		let i = Math.trunc(copy.length/2);
		copy[i] = 'X';
		setNotes(copy)
	}

	function handleClick4 () {
		let copy = Object.assign([], notes);
		copy.reverse();
		setNotes(copy)
	}
		
	const result = notes.map((note, index) => {
	return <p key={index}>{note}</p>;
	});
	
	return <div>
	<button style={{margin: '10px'}} onClick={handleClick1} >ADD</button>
	<button style={{margin: '10px'}} onClick={handleClick2} >MIN</button>
	<button style={{margin: '10px'}} onClick={handleClick3} >CHG</button>
	<button style={{margin: '10px'}} onClick={handleClick4} >RVS</button>
		{result}
	</div>;
}

export default App;

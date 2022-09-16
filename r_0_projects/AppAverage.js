import './App.css';
import {useState} from 'react';




function App() {
	const [notes, setNotes] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
	const [value, setValue] = useState('0')

	function average (arr) {
	let sum = 0;
	let aver = 0;
	for (let i of arr)
	sum += +i; 
	aver = sum/arr.length;
	return aver;
}

	function handlerChange(index, event) {
		setNotes([...notes.slice(0,index), event.target.value, ...notes.slice(index+1)])
	}

	function addItem () {
		let copy = Object.assign([], notes);
		copy.push(0);
		setNotes(copy);
	}

	function delItem (value) {
		let copy = Object.assign([], notes);
		copy.splice(value,1);
		setNotes(copy);
	}

    const result = notes.map((note, index) => {
	return <p><input
	    key = {index}
		value = {note}
		onChange = {(event) => handlerChange(index, event)}
		onFocus = {() => setValue(index)}
	/></p>
    })
	
	return <div>
	<button onClick = {addItem}
	style = {{cursor: 'pointer'}}
	>ADD</button>
	<button onClick = {() => delItem(value)}
	style = {{cursor: 'pointer'}}
	>DEL</button>
		{result}
		<p>Среднее арифметическое = {average(notes)}</p>
	</div>;
}

export default App;
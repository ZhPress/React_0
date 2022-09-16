import './App.css';
import {useState} from 'react';




function App() {
	const [notes, setNotes] = useState(['a', 'b', 'c', 'd', 'e']);
	const [editNum, setEditNum] = useState('');
	const [item, setItem] = useState('')

	
	function changeItem(event) {
		setNotes([...notes.slice(0,editNum), event.target.value, ...notes.slice(editNum+1)])
	}

	function addItem () {
       setNotes([...notes, item]);
	   setItem('')
	}

	function editItem (event) {
		setItem(event.target.value)
	}

    const result = notes.map((note, index) => {
	return <ul>
	         <li
	    key = {index}
		onClick = {() => setEditNum(index)}>{note}
		   </li> 
	      </ul>
    })
	
		let input = <input
			value = {editNum? notes[editNum] : item}
			onChange = {editNum? changeItem : editItem}
			onBlur = {editNum? () => setEditNum('') : addItem}
		/>

	return <div>
		{result}
		{input}
	</div>;
}

export default App
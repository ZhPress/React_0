import './App.css';
import {useState} from 'react';




function App() {
	const [notes, setNotes] = useState(['a', 'b', 'c', 'd', 'e']);
	const [editNum, setEditNum] = useState('');
	
	function changeItem(event) {
		setNotes([...notes.slice(0,editNum), event.target.value, ...notes.slice(editNum+1)])
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
			value = {editNum? notes[editNum] : ''}
			onChange = {changeItem}
			onBlur = {() => setEditNum('')}
			onFocus = {!editNum? () => {
				setNotes([...notes, ''])
				setEditNum(notes.length)
			} :''
			}
		/>

	return <div>
		{result}
		{input}
	</div>;
}

export default App
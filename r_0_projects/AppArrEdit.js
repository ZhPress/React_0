import './App.css';
import {useState} from 'react';




function App() {
	const [notes, setNotes] = useState(['a', 'b', 'c', 'd', 'e']);
	const [editNum, setEditNum] = useState('')

	
	function changeItem(event) {
		setNotes([...notes.slice(0,editNum), event.target.value, ...notes.slice(editNum+1)])
	}

    const result = notes.map((note, index) => {
	return <ul>
	         <li
	    key = {index}>{note}
		   </li> <button
		   onClick={() => setEditNum(index)} 
		   >EDIT</button>
	      </ul>
    })
	
	return <div>
		{result}
		<input
			value = {editNum? notes[editNum]:'' }
			onBlur = {() => setEditNum('')}
			onChange = {changeItem}
		/>
	</div>;
}

export default App;
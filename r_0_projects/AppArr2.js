import './App.css';
import {useState} from 'react';

function App() {
	const [notes, setNotes] = useState(['a', 'b', 'c', 'd', 'e']);
	const [value, setValue] = useState('');
	
	const result = notes.map((note, index) => {
		return <ul>
			<li key={index}>{note}
			<button onClick={() => delItem(index)}
		     style = {{cursor: 'pointer'}}>
                DEL
		    </button>
		  </li>
		</ul>
	})

	function delItem(index) {
		let copy = Object.assign([], notes);
		copy.splice(index,1);
		setNotes(copy)
	}
	
	return <div>
		{result}
		<input value={value} 
		onChange = {(event) => setValue(event.target.value)} 
		onBlur = {() => {setNotes([...notes, value]); setValue('')}} 	
		/>
		
	</div>;
}

export default App;

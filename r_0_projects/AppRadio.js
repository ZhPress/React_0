import './App.css';
import {useState} from 'react';

function App() {
	const [value, setValue] = useState('');
	
	function changeHandler(event) {
		setValue(event.target.value);
	}
	
	return <div>
  <p>What is your favorite program language?</p>
		<p> JS <input
			type="radio"
			name="JS"
			value="Bingo!!!"
			checked={value === 'Bingo!!!' ? true : false}
			onChange={changeHandler}
		/></p>
		<p>Python<input
			type="radio"
			name="Python"
			value=" "
			checked={value === ' ' ? true : false}
			onChange={changeHandler}
		/></p>
		<p>C++<input
			type="radio"
			name="C++"
			value=""
			checked={value === '' ? true : false}
			onChange={changeHandler}
		/></p>
    <p>{value}</p>
	</div>

}

export default App;

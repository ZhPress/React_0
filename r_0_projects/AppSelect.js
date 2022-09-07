import './App.css';
import { useState } from 'react';

function App() {
	const texts = ['text1', 'text2', 'text3', 'text4'];
	const [value, setValue] = useState('');
	
	const options = texts.map((text, index) => {
		return <option key={index} value={index}>{text}</option>;
	});
	//____________________________________________________________________________
	/*<select>
	<option value='1'>text1</option>
	<option value='2'>text2</option>
	<option value='3'>text3</option>
	<option value='4'>text4</option> 
	</select>*/                         //можливий такий варіант

//________________________________________________________________________________

	return <div>
	<select value={value} onChange={event => setValue(event.target.value)}>
		{options}
	</select>
	<p>
		ваш выбор: {texts[value]}
	</p>
</div>;
}



export default App;

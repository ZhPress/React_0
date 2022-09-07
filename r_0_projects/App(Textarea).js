import './App.css';
import { useState } from 'react';




function App() {
	let [value, setValue] = useState('');
	let [sum, setSum] = useState(0)
    
  function res () {
    let arr = value.split('')
    for (let i of arr) {
      sum += +i;
    }
    setSum(sum);
  }

 
	return <div>
		<textarea value={value} 
    onChange={(event) => setValue(event.target.value)} 
    onBlur={res} />
		<p>{sum}</p>
	</div>;
}

export default App;

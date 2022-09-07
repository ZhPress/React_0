import './App.css';
import { useState } from 'react';




function App() {
  let [date1, setDate1] = useState('1970-01-01');
  let [date2, setDate2] = useState('1970-01-01');
  let [res, setRes] = useState('Result');

  function handleClick (event) {
    setRes((date1-date2) / (1000 * 3600 *24));
    return res
  }
  
	return <div>
	<div>
       <input type = 'date'
       onChange={(event) => setDate1(new Date(event.target.value))} /> 
       <input type = 'date'
       onChange={(event) => setDate2(new Date(event.target.value))} />
    </div>
   
    <div>
     <button onClick = {handleClick} >DAYS</button>
    </div>
   
    <div>
     <h1>{res}</h1>
    </div>
    
	</div>;
}

export default App;

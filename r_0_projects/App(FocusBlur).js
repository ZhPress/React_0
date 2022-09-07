import './App.css';
import { useState } from 'react';




function App() {
  let [x, setX] = useState();
  let [sum, setSum] = useState(0);

  function blur () {
    let arr = x.split('')
    for (let i of arr) {
      sum += +i;
    }
    setSum(sum);
  }

	return <div>
	<div>
       <input value = {x} 
       onChange = {(event)=>setX(event.target.value)}
       onBlur={blur} 
       onFocus = {() => {setX(0); setSum(0)}}
       />
       
    </div>
   
    <div>
    
    </div>
   
    <div>
     <h1>{sum}</h1>
    </div>
    
	</div>;
}

export default App;

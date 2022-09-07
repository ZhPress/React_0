import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {
	  let [name, setName] = useState('Users name');
    let [surname, setSurname] = useState('Users surname');
    let [age, setAge] = useState('Users age');
    let [active, setActive] = useState(true)

	
	return <div>
		<div>
    First name: <input type="text" name="first_name" />
    <input type="submit" onClick={()=>setName(document.getElementsByName
    ('first_name')[0].value)
} /><br />
     Last name: <input type="text" name="surname" />
     <input type="submit" onClick={()=>setSurname(document.getElementsByName
    ('surname')[0].value)
} /><br />
        Users age: <input type="text" name="user_age" />
        <input type="submit" onClick={()=>setAge(document.getElementsByName
    ('user_age')[0].value)
} /><br />
    </div>
    
    <h2>{name} {surname}: {age} </h2> <span>          {active? 'active' : 'ban'} </span>

    <div>
      <button id = '1' style={{
        display: active? 'none':'',
        cursor: 'pointer',
        }}
      onClick={()  => {return (setActive(true))}}>ACTIV</button>
      <button id = '2' style={{
        display: active? '':'none' ,
        cursor: 'pointer',
        }}
      onClick={() =>  {setActive(false)}}>BAN</button>
    </div>

    <div>
      <button onClick={() => {setAge(++age)}}>Age++</button>
      <button onClick={() => {setAge(--age)}}>Age--</button>
    </div>

	</div>;
}


export default App;

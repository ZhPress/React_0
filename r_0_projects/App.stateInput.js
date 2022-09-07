import logo from './logo.svg';
import './App.css';
import { useState } from 'react';



function App() {
  let [name, setName] = useState('Users name');
  let [surname, setSurname] = useState('Users surname');
  let [age, setAge] = useState('Users age');
  let [active, setActive] = useState(true);
  let status;
    
	return <div>
		<div>
    <input value={name} onChange = {(event) => {setName(event.target.value)}}/> 
    <input value={surname} onChange = {(event) => {setSurname(event.target.value)}} />
    <input value={age} onChange = {(event) => {setAge(event.target.value)}} /><br/>
   </div>
  
   <div>
    <p>{name}  {surname}: {age} years old          <h3>{active? 'ACTIVE': 'BAN'}</h3></p>
     </div>
    <div>
      <button onClick={() => {setAge(++age)}}>Age+</button>
      <button onClick={() => {setAge(--age)}}>Age-</button>
    </div>
    <div>
      <button style={{display: active? 'none':''}} 
      onClick={() => {setActive(true)}
      }>ACTIVE
      </button>
      <button style={{display: active? '':'none'}}
      onClick={() => {setActive(false)}
      }>BAN
      </button>
    </div>
    
	</div>;
}


export default App;

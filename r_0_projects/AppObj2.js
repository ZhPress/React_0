import './App.css';
import {useState} from 'react';
import * as nano from 'nanoid'

const initNotes = [
	{id: 'GYi9G_uC4gBF1e2SixDvu', prop1: 'value11', prop2: 'value12', prop3: 'value13'},
	{id: 'IWSpfBPSV3SXgRF87uO74', prop1: 'value21', prop2: 'value22', prop3: 'value23'},
	{id: 'JAmjRlfQT8rLTm5tG2m1L', prop1: 'value31', prop2: 'value32', prop3: 'value33'},
];
const initProds = [
	{id: iD(), name: 'prod1', catg: 'catg1', cost: 100},
	{id: iD(), name: 'prod2', catg: 'catg2', cost: 200},
	{id: iD(), name: 'prod3', catg: 'catg3', cost: 300},
]; 
function iD () {
	return nano.nanoid(21)
   }

function App() {
	const [notes, setNotes] = useState(initNotes);
	const [prods, setProds] = useState(initProds);
	const [value1, setValue1] = useState('');
	const [value2, setValue2] = useState('');
	const [value3, setValue3] = useState('');

	function remItem(id) {
		return ( 
			setNotes(notes.filter(note => note.id !== id)),
			setProds(prods.filter(prod => prod.id !== id))
		)
	}
	function addItem() {
		let obj = {id: iD(), name: value1, catg: value2, cost: value3};
		setProds([...prods, obj]);
		setValue1('');
		setValue2('');
		setValue3('');
	}

	const result = notes.map(note => {
		return <p key={note.id}>
			<span>{note.prop1}</span>,
			<span>{note.prop2}</span>,
			<span>{note.prop3}</span>
			<button
	onClick={() => remItem(note.id)}
	>remove</button>
		</p>;
	});

	const result1 = prods.map(prod => {
	return <ul key = {prod.id}> 
	<li>{prod.name}</li>
	<li>{prod.catg}</li>
	<li>{prod.cost} <button 
	onClick={() => remItem(prod.id)}
	>remProd</button>
	 </li>
	 </ul>});	
 
	return <div>
	{result}
	{result1}

	<input value={value1} 
		onChange = {(event) => setValue1(event.target.value)}
	/>
	<input value={value2} 
		onChange = {(event) => setValue2(event.target.value)}
	/>
	<input value={value3} 
		onChange = {(event) => setValue3(event.target.value)}
	/> 
	<button
	onClick={addItem}
	>ADD Prod</button> 
	
		
	</div>;
}

export default App
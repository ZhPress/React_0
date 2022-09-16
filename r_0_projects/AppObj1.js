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
	const [res, setRes] = useState('');
	const id = 'JAmjRlfQT8rLTm5tG2m1L';
	const id4 = 'GMNCZnFT4rbBP6cirA0Ha'
	const prop = 'prop1'
    const prop1 = 'prop2';
    const prop2 = 'prop3';
    const value = '!';
	const newElem = {id: 'GMNCZnFT4rbBP6cirA0Ha', prop1: 'value41', prop2: 'value42', prop3: 'value43'};
	const data = {id: 'GMNCZnFT4rbBP6cirA0Ha', prop1: 'value21 !', prop2: 'value22 !', prop3: 'value23 !'};

	const result = notes.map(note => {
		return <p key={note.id}>
			<span>{note.prop1}</span>,
			<span>{note.prop2}</span>,
			<span>{note.prop3}</span>
		</p>;
	});

	const result1 = prods.map(prod => {
	return <ul key = {prod.id}>
	<li>{prod.name}</li>
	<li>{prod.catg}</li>
	<li>{prod.cost}</li>
	 </ul>});	
 
	/*function handleChange2 () {
		let copy = Object.assign([], notes)
		copy.map(note => note.id === id?
			 (note.prop1 = (prop1 + value), note.prop2 = (prop2 + value)) : note);
	    console.log(copy);
		setNotes(copy)
	}*/ 
	// заміна свойств prop1, prop2 через Object.assign
	return <div>
	<button
	onClick={() => setNotes(notes.filter(note => note.id !== id))}
	>DEL</button>
    <button
	onClick={() => setNotes([...notes, newElem])}
	>ADD</button>
	<button
	onClick={() => setNotes(notes.map(note => note.id === data.id? data: note))}
	>CHANGE1</button>
	<button
	onClick={() => setNotes(notes.map(note => note.id === id?
			 {...note, [prop1]: prop1 + value, [prop2]: prop2 + value}: note))}
	>CHANGE2</button>
	<button
	onClick={() => setRes(notes.reduce((res,note) => note.id === id4? note[prop]: res, ''))}
	>Get PROP</button>
		{result}
		{result1}
		<p>{res}</p>
	</div>;
}

export default App
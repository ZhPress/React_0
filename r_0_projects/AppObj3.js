import './App.css';
import {useState} from 'react';
import * as nano from 'nanoid'

const initProds = [
	{id: iD(), name: 'prod1', catg: 'catg1', cost: 100},
	{id: iD(), name: 'prod2', catg: 'catg2', cost: 200},
	{id: iD(), name: 'prod3', catg: 'catg3', cost: 300},
]; 
function iD () {
	return nano.nanoid(21)
   }

function App() {
	const [prods, setProds] = useState(initProds);
	const [editId, setEditId] = useState('');
	const [obj, setObj] = useState(greateObj());
	const result = prods.map(prod => {
		return <ul key = {prod.id}>
			<li>{prod.name}</li>
			<li>{prod.catg}</li>
			<li>{prod.cost}</li>
			<button onClick={() => setEditId(prod.id)}>EDIT</button>
			<button onClick={() => delProd(prod.id)}>DEL</button>
		</ul>
		}
		);
		
		function getValue(prop) {
			if (editId) {
                return prods.reduce((res, prod) => prod.id === editId? prod[prop]: res, '')
			} else {
				return obj[prop]
		}}

		function editProp(prop, event) {
			if (editId) {
				setProds(prods.map(
				prod =>	prod.id===editId? {...prod, [prop]: event.target.value}: prod))
			} else {
			setObj({...obj, [prop]:event.target.value})
		}}

		function greateObj () {
			return {id: iD(), name: '', catg: '', cost: ''}
		}
		function addProd () {
			setProds([...prods, obj]);
			setObj(greateObj());
			setEditId('')
		}

		function delProd(id) {
			setProds(prods.filter(prod => prod.id !== id))
		}

	return <div>
		{result}
		<input value={getValue('name')}
			onChange = {(event) => editProp('name', event)}
		/>
		<input value={getValue('catg')}
			onChange = {(event) => editProp('catg', event)}
		/>
		<input value={getValue('cost')}
		   onChange = {(event) => editProp('cost', event)}
		/>
		<button
		onClick={() => setEditId('')}>EDIT prod</button>
		<button
		onClick={addProd}>ADD Prod</button>
	</div>
}

export default App
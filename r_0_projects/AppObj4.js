import './App.css';
import {useState} from 'react';
import * as nano from 'nanoid'

const initProds = [
	{
		id: id(),
		name: 'prod1',
		cost: 'cost1',
		desc: 'long description 1',
		comm: 'my super comment 1',
		showDesc: false,
		showComm: false
	},
	{
		id: id(),
		name: 'prod2',
		cost: 'cost2',
		desc: 'long description 2',
		comm: 'my super comment 2',
		showDesc: false,
		showComm: false
	},
	{
		id: id(),
		name: 'prod3',
		cost: 'cost3',
		desc: 'long description 3',
		comm: 'my super comment 3',
		showDesc: false,
		showComm: false
	},
];

function id () {
	return nano.nanoid(7)
   }

function App() {
	const [prods, setProds] = useState(initProds);

	function showD (id) {
		setProds(prods.map(prod =>
			prod.id === id? {...prod, showDesc: !prod.showDesc}:
			prod))
	}
	
	function showC (id) {
		setProds(prods.map(prod =>
			prod.id === id? {...prod, showComm: !prod.showComm}:
			prod))
	}

	const result = prods.map (prod =>{
		let desc; let comm;
		if (prod.showDesc) {
			desc = <li><mark>{prod.desc}</mark></li>
		}
		if (prod.showComm) {
			comm = <li><b>{prod.comm}</b></li>
		} return (
		<ul key = {prod.id}>
            <li>{prod.name}</li>
			<li>{prod.cost}</li>
			{desc}
			{comm}
			<button
			onClick={() => showD(prod.id)}
			style={{backgroundColor: prod.showDesc? 'red':'grey'}}
			>{prod.showDesc? 'HIDE DESC': 'SHOW DESC'}</button>
			<button
			onClick={() => showC(prod.id)}
			style={{backgroundColor: prod.showComm? 'red':'grey'}}
			>{prod.showComm? 'HIDE COMM': 'SHOW COMM'}</button>
		</ul>)
	})
	return <div>
		{result}
	</div>;
}

export default App
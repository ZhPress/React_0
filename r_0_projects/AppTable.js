import './App.css';
import {useState} from 'react';
import * as nano from 'nanoid'

let initNotes = [
	{
		id: id(),
		fields: [
			{name: 'prop1', value: 'value11', isEdit: false},
			{name:' prop2', value: 'value12', isEdit: false},
			{name: 'prop3', value: 'value13', isEdit: false}
		]
		
	},
	{
		id: id(),
		fields: [
			{name: 'prop1', value: 'value21', isEdit: false},
			{name: 'prop2', value: 'value22', isEdit: false},
			{name: 'prop3', value: 'value23', isEdit: false}
		]
	},
	{
		id: id(),
		fields: [
			{name: 'prop1', value: 'value31', isEdit: false},
			{name: 'prop2', value: 'value32', isEdit: false},
			{name: 'prop3', value: 'value33', isEdit: false}
		]
	}
];

function id () {
	return nano.nanoid(21)
   }

function App() {
	const [notes, setNotes] = useState(initNotes);
	const [edit, setEdit] = useState(false);
	const rows = notes.map(note =>{
		const cells = note.fields.map(field =>{
			let elem;
			if (!field.isEdit) {
				elem = <span
				onClick={() => startEdit(note.id, field.name)}
				>{field.value}</span>
			} else {
				elem = <input
				    autoFocus = 'true'
					value={field.value}
					onChange={(event) => valueEdit(note.id, field.name, event)}
					onBlur={() => endEdit(note.id, field.name)}
				/>
			}
			return <td key = {field.name}>{elem}</td>
		})
		return <tr key={note.id}>{cells}</tr>
	})

	function startEdit(id, name) {
		setNotes(notes.map(note => { if (note.id === id) {
	         const fields = note.fields.map(field =>{
				if (field.name === name) {
					return {...field, isEdit: true}
				} else {
					return field
				} 
			 }) 
			 return {id, fields}
		} else {return note}
	}))
	}

	function endEdit(id, name) {
		//setEdit(true);
		//setNotes(notes.map(note => {makeGeneral(note, id, name)}))
		setNotes(notes.map(note => { if (note.id === id) {
			const fields = note.fields.map(field =>{
			   if (field.name === name) {
				   return {...field, isEdit: false}
			   } else {
				   return field
			   } 
			}) 
			return {id, fields}
	   } else {return note}
   }))
   }
	
	
	
	function valueEdit(id, name, event) {
		setNotes(notes.map(note => { if (note.id === id) {
	         const fields = note.fields.map(field =>{
				if (field.name === name) {
					return {...field, value: event.target.value}
				} else {
					return field
				} 
			 }) 
			 return {id, fields}
		} 
		else {return note}
	}))
	}

	/*function makeGeneral (note, id, name) {
		if (note.id === id) {
			const fields = note.fields.map(field =>{
			   if (field.name === name) {
				   return {...field, isEdit: !edit}
			   } else {
				   return field
			   } 
			}) 
			return {id, fields}
	   } else {return note}
	}*/

	return <div>
		<table>
			<tbody>
				{rows}
			</tbody>
		</table>
	</div>;
}

export default App
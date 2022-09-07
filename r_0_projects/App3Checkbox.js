import './App.css';
import { useState } from 'react';

	function App() {
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const [checked3, setChecked3] = useState(false);
    const [css, setCSS] = useState('');
    const [html, setHTML] = useState('');
    const [jsx, setJSX] = useState('');

    function handleClick1() {
      setChecked1(!checked1);
      if (!checked1) setCSS('KNOW')
      else setCSS('DO Not KNOW')
    }

    function handleClick2() {
      setChecked2(!checked2);
      if (!checked2) setHTML('KNOW')
      else setHTML('DO Not KNOW')
    }

    function handleClick3() {
      setChecked3(!checked3);
      if (!checked3) setJSX('KNOW')
      else setJSX('DO Not KNOW')
    }

	return <div>
  Select languages:  CSS
		<input type='checkbox'  checked={checked1} 
    onChange={handleClick1} 
   /> 
   HTML
   <input type='checkbox'  checked={checked2} 
    onChange={handleClick2} 
   />
   JSX
   <input type='checkbox'  checked={checked3} 
    onChange={handleClick3} 
   />
   <p> {css} </p>
   <p> {html} </p>
   <p> {jsx} </p>

	</div>;
}

export default App;

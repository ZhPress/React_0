import './App.css';
import { useState } from 'react';

function App() {
  const [checked1, setChecked1] = useState(false);
  const [t, setT] = useState(false);


function handleChange() {
    setChecked1(!checked1);
    setT(true);
    }

  let text;
  if (checked1 && t) {
  text = <div><h2>Ура, вам уже есть 18</h2>
  <p>здесь расположен контент только для взрослых</p>
  </div>
  } 
  if (!checked1 && t) {
  text =  <p> увы, вам еще нет 18 лет:(</p>
  }

    return <div>
Have you 18 years old?
  <input type='checkbox'  defaultChecked={false} 
  onChange={handleChange} 
 /> 
  <div>{text}</div>
</div>
}

export default App;
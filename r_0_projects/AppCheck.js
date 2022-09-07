import './App.css';
import { useState } from 'react';

function App() {
    const [checked1, setChecked1] = useState(true);
    const text = () => {if (checked1) {
  <div><h2>Ура, вам уже есть 18</h2>
  <p>здесь расположен контент только для взрослых</p>
</div>
 } else { <div>
  <p> увы, вам еще нет 18 лет:(</p>
  </div>
 }
}

    function handleChange() {
      setChecked1(!checked1);
      }
   
      return <div>
  Have you 18 years old?
    <input type='checkbox'  checked={!checked1} 
    onChange={handleChange} 
   /> 
  <div>{text} </div>
  </div>;
}

export default App;
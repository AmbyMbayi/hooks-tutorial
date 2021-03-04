import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
//  const [language, setLanguage] = useState('react')
//  const [years, setYears] = useState(0)

const [state, setState] = useState({
  language: "React",
  years: 0
})



 function changeLanguage(){
  setState({...state, language:"React Hooks"})
 }

 function addYear(){
   setState(prev => {
     return {
       ...prev,
       years:prev.years +1
     }
   })
 }

  return (
    <div className="App">
      <h2 onClick={changeLanguage}>Learning a new language called {state.language }</h2>

      <p>I have been learning it for {state.years} years now</p>
      <button onClick={addYear}>Add Year</button>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
 const [language, setLanguage] = useState('react')
 const [years, setYears] = useState(0)

 function changeLanguage(){
   setLanguage('React Hooks')
 }

 function addYear(){
   setYears(prev => prev+1)
 }

  return (
    <div className="App">
      <h2 onClick={changeLanguage}>Learning a new language called {language }</h2>

      <p>I have been learning it for {years} years now</p>
      <button onClick={addYear}>Add Year</button>
    </div>
  );
}

export default App;

import React from "react";
import './App.css';
import WordGame from './hooks/wordGame'
function App(){
  const {text,handleChange}=WordGame()
  return(
    <div>
       <h1>How fast do use type?</h1>
      <br/>
      <textarea 
         value={text}
         onChange={handleChange}
      />
      <h4>Time remaining :</h4>
      <button>Start</button>
      <h1>Word Count</h1>
    </div>
  )
}
export default App
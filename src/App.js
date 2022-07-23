import React from "react";
import './App.css';
import useWordGame from './hooks/useWordGame'
function App(){
  const {
    text,
    wordCount,
    textBoxRef,
    startGame,
    timeRemaining,
    isTimeRunning,
    handleChange
    }=useWordGame()
  return(
    <div>
       <h1>How fast do use type?</h1>
      <br/>
      <textarea 
         ref={textBoxRef}
         onChange={handleChange}
         value={text}
         disabled={!isTimeRunning}
         
      />
      <h4>Time remaining :{timeRemaining}</h4>
      <button disabled={isTimeRunning} onClick={startGame}>Start</button>
      <h1>Word Count:{wordCount}</h1>
    </div>
  )
}
export default App
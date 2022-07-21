import React,{useEffect, useState,useRef} from "react";
import './App.css';
// import WordGame from './hooks/wordGame'
function App(){
  const START_TIME=10
  const [text,setText]=useState("")
    const [timeRemaining,setTimeRemaining]=useState(START_TIME)
    const [isTimeRunning,setIsTimeRunning]=useState(false)
    const [wordCount,setWordCount]=useState(0)
    const textBoxRef = useRef(null)
    function handleChange(e){
      const {value}=e.target
       setText(value)
    }
    
    function calculateWordCount(text){
      const wordsArr=text.trim().split(" ")
      return wordsArr.filter(word=> word!=="").length 
    }

    function startGame(){
      setIsTimeRunning(true)
      setTimeRemaining(START_TIME)
      setText("")
      setWordCount(0)
      textBoxRef.current.disabled = false
      textBoxRef.current.focus()
      
    }
    
    function endGame(){
      setIsTimeRunning(false)
      setWordCount(calculateWordCount(text))
    }

    useEffect(()=>{
      if(isTimeRunning && timeRemaining>0){
        setTimeout(()=>{
          setTimeRemaining(time=>time-1)
        },1000)
      }
      else if(timeRemaining===0){
        endGame()
      }
    },[timeRemaining,isTimeRunning,])

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
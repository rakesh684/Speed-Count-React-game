import {useEffect, useState} from "react";
function WordGame(){
    const [text,setText]=useState("")
    const [timeRemaining,setTimeRemaining]=useState(5)
    const [isTimeRunning,setIsTimeRunning]=useState(false)
    function handleChange(e){
        const {value}=e.target
        setText(value)
    }
   function calculateWordCount(text){
    const wordsArr=text.trim().split(" ")
    return wordsArr.filter(word=> word!=="").length
    
   }
   useEffect(()=>{
    if(isTimeRunning===true && timeRemaining>0){
        setTimeout(()=>{
            setTimeRemaining(time=>time-1)
        },1000)
    }
   },
   [timeRemaining])
   
   
    return(
        {text,timeRemaining,handleChange,calculateWordCount}
           
    )
}
export default WordGame
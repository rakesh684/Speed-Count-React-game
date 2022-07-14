import {useState} from "react";
function WordGame(){
    const [text,setText]=useState(" ")
    function handleChage(e){
        const {value}=e.target
        setText(value)
    }
    return(
        {text,handleChage}
           
    )
}
export default WordGame
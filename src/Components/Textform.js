import React, {useState} from 'react'
export default function Textform(props){
  const [text,settext] = useState("");
  //we  use onchange event to write in the textarea 
const handleOnChange=(event)=>{
// console.log("on change")
//learn it
settext(event.target.value)
}
// we have crea3w73343ted a function that converts text into uppercase
const handleUpClick=()=>{
  // console.log("you have clicked on handleOn Click");
  let newtext = text.toUpperCase();
  settext(newtext);
}
// it deletes whatever is written in the textarea
const Empty=()=>{
settext("");
}
// how to copy text from textarea
const copytext=()=>{
  var text = document.getElementById("mybox");
  text.select();
  document.execCommand('copy')

}
  return(
    <>
    <div>
<h1>{props.heading}</h1>
    <div className="mb-3">
    <label htmlFor="mybox" className='form-label'></label>
    <textarea className="form-control" id="mybox" onChange={handleOnChange} value={text} rows="5"></textarea>
  </div>
  <button className='btn btn-primary' onClick={handleUpClick}>Convert to Uppercase</button>
  <button className='btn btn-danger mx-3' onClick={Empty}>Delete text</button>
  <button className='btn btn-success mx-2' onClick={copytext}>Copy text</button>
    </div>
    <div className="container">
      <h1>your text summary</h1>
      <p>{text.split(" ").length} words and {text.length}</p>
    </div>
    </>
  )
}
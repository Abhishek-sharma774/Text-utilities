
import React,{useState} from 'react'

export default function TextForm(props) {
  const [text, setText] = useState('Enter text here only');
   const handleUpperClick=()=>{
    console.log("you clicked for uppercase"+ text);
    let newText=text.toUpperCase();
    setText(newText)
   }
   const handleLowerClick=()=>{
    console.log("you clicked for Lowercase"+ text);
    let newText2=text.toLowerCase();
    setText(newText2)
  }
  
  const handleOnChange=(event)=>{
    console.log("onChange");
    setText(event.target.value);
  }
  return (
    <>

      <div classsName="container my-3">
        <h1>{props.heading}</h1>
          <div className="mb-3">
          <label  className="form-label" ><h6>You can do many things here!!</h6></label>
          <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
          <button className="btn-btn-primary" onClick={handleUpperClick}>Convert to uppercase </button>
          <button className="btn-btn-primary" onClick={handleLowerClick}>Convert to Lowercase </button>
      </div>
        <div className="container" ></div>
          <h1> your text summary</h1>
          <p>{text.split(" ").length} words and {text.length} characters</p>
          <h3>Text Preview</h3>
          <p>{text}</p>
        </div>    
    </>
  ) 
}


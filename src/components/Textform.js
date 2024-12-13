import React, {useState} from 'react'


export default function Textform(props) {
        const handleUpClick = ()=>{

            let newText  = text.toUpperCase();     /* for a uppercase */
            setText(newText)
        }
        const handleLoClick = ()=>{
            let newText  = text.toLowerCase();      /* for a lowercase */
            setText(newText)
        }
        const handleClearClick= ()=>{         /* for a cleaaText */
            let newText  = '';
            setText(newText)
        }
        const handleOnChange = (event)=>{
            setText(event.target.value)
        }

        const [text, setText] = useState('');   /* Hooks */
  return (
    <>
    <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-success mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-success mx-2" onClick={handleLoClick}>Convert to Lowercase</button>       {/*  */}
        <button className="btn btn-success mx-2" onClick={handleClearClick}>Clear Text</button>       {/*  */}
  </div>

  <div className="container my-3">
    <h2>Your text summary</h2>
    <p> {text.split(" ").length} words and {text.length} Characters</p>
    <h2>Preview</h2>
    <p>{text}</p>
  </div>
  </>

  )
}

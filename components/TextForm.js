import React, { useState } from 'react'

export default function TextForm(props) {
  const handleUpClick = () => {
    let newValue = text.toUpperCase();
    setText(newValue);
  }

  const handleLoClick = () => {
    let newValue = text.toLowerCase();
    setText(newValue);
  }

  const handleClear = () => {
    let newValue = " ";
    setText(newValue);
  }

  const handleReverse = () => {
    let newtext = "";
    for (let i = text.length - 1; i >= 0; i--) {
      newtext += text[i];
    }
    setText(newtext);
  }

  const handleAlternative = () => {
    let alterVal = "";
    for (let i = 0; i < text.length; i++) {
      alterVal += (i % 2 !== 0) ? text[i].toUpperCase() : text[i].toLowerCase();
    }
    setText(alterVal);
  }

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  const handleOnChange = (event) => {
    setText(event.target.value)
  }

  const [text, setText] = useState("");

  return (
    <>
      <div style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
        <h2>TypeText Here</h2>
        <textarea className='form-control' cols="100" rows="8" value={text} style={{ backgroundColor: props.mode === 'dark' ? '#13466e' : "white", color: props.mode === 'light' ? 'black' : 'white' }} onChange={handleOnChange} id='myBox'>TypeText</textarea>
        <div className='container my-3'>
          <button className="btn btn-primary" onClick={handleUpClick}>Uppercase</button>
          <button className="btn btn-primary" onClick={handleLoClick}>Lowercase</button>
          <button className="btn btn-primary" onClick={handleClear}>ClearText</button>
          <button className="btn btn-primary" onClick={handleReverse}>Reverse</button>
          <button className="btn btn-primary" onClick={handleAlternative}>aLtErNaTiVe</button>
          <button className="btn btn-primary" onClick={handleCopy}>Copy</button>
        </div>
        <div>
          <h1>Text Summary</h1>
          <p>{text.split(" ").filter((word) => {
            return Boolean(word);
          }).length} words and {text.length} characters</p>
        </div>
      </div>

    </>
  )
}

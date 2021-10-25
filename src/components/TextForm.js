import React from "react";
import { useState } from "react";
function TextForm(props) {
    const [text, setText] = useState();
    const handleUpclick = ()  => {
      let newText = text.toUpperCase();
      setText(newText);
    }
    const handleOnChange = (Event) =>{
      setText(Event.target.value);
    }
  return (
    <div className="container" >
      <div className="mb-3"  style={{color: props.mode==="dark"?"yellow" :"black"}}>
        <h2>{props.heading} </h2>
       
        <textarea
          value={text}
          style={{backgroundcolour: props.mode==="dark"? "Grey": "white", color:props.mode=== "dark"?"white": "black"}}

          onChange={handleOnChange}
          className="form-control"
          id="myBox"
          rows="10"
        ></textarea>
      </div>
      <button type="button" onClick={handleUpclick} className="btn btn-primary">
        Convert to Uppercase
      </button>
     
    </div>
  );
}

export default TextForm;

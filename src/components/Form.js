import { useState } from 'react'

function Form(props) {

  function clickedOnSubmitButton(){
    alert(text)
    settextArea(text)
  }
  
  const handleOnChange = (event) => {
    setText(event.target.value);
  }

  const [text, setText] = useState(null);
  const [textArea, settextArea] = useState(null);

  return (
    <div className='container'>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
          onChange={handleOnChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Example textarea
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          value={textArea}
        ></textarea>
      </div>
      <div className="d-grid gap-2 col-6 mx-auto">
      <button className="btn btn-success" type="button" onClick={clickedOnSubmitButton}>
        Show Alert & Populate Textarea
      </button>
      </div>
      </div>
  );
}

export default Form;

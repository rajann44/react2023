import { useState } from 'react'
import { isInvalidateEmail, isValidPasswordInvalid } from '../utils/basicutil';

function Form(props) {

  function clickedOnSubmitButton(){
    setValidEmail(isInvalidateEmail(textEmail))
    setCheckIfPasswordInvalid(isValidPasswordInvalid(textPassword))
  }
  
  const handleOnEmailChange = (event) => {
    setTextEmail(event.target.value);
  }

  const handleOnPasswordChange = (event) => {
    setTextPassword(event.target.value);
  }

  const [textEmail, setTextEmail] = useState(null);
  const [textPassword, setTextPassword] = useState(null);
  const [validEmail, setValidEmail] = useState(false);
  const [checkIfPasswordInvalid, setCheckIfPasswordInvalid] = useState(false);

  return (
    <div className='container'>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Email address:
          {validEmail && <p style={{color: "red"}}>Please enter a valid email</p>}
        </label>
        <input
          type="email"
          className="form-control"
          name ="email"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
          onChange={handleOnEmailChange}
        />
        <div className='my-2'></div>
        <label  htmlFor="password" className="form-label">
          Password:
          {checkIfPasswordInvalid && <p style={{color: "red"}}>
            The password must be at least 8 characters long.<br />
            The password must contain at least one uppercase letter ([A-Z]).<br />
            The password must contain at least one lowercase letter ([a-z]).<br />
            The password must contain at least one digit (\d).<br />
            The password must contain at least one special character.<br />
            </p>}
        </label>
        <input
          type="password"
          className="form-control"
          name ="password"
          id="password"
          placeholder="your secert password here"
          onChange={handleOnPasswordChange}
        />
      </div>
      <div className="d-grid gap-2 col-6 mx-auto">
      <button className="btn btn-success" type="button" onClick={clickedOnSubmitButton}>
        Register
      </button>
      </div>
      </div>
  );
}

export default Form;

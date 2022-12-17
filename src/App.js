import React, {useState} from "react"
import './style/style.scss'

function App() {

  const [value, setValue] = useState({
    firstName: '',
    lastName: '',
    email: ''
  })

  const [submitted, setSubmitted] = useState(false)
  const [valid, setValid] = useState(false)

  const firstNameinputChangeHandler = (event) => {
    setValue({...value, firstName: event.target.value})
  }
  const lastNameinputChangeHandler = (event) => {
    setValue({...value, lastName: event.target.value})
  }
  const emailinputChangeHandler = (event) => {
    setValue({...value, email: event.target.value})
  }

  const submitHandler = (event) => {
    event.preventDefault()
    if(value.firstName && value.lastName && value.email){
      setValid(true)
    }
    setSubmitted(true)
  }

  return (
    <div className='form-container'>
      <form className='register-form' onSubmit={submitHandler}>
        {valid && value ? <div className="succes-message">Thanks for your registration!</div> : null }
        <h3>Sign Up</h3>
        <input
        onChange={firstNameinputChangeHandler}
        value={value.firstName}
        id="first-name"
        class='form-field'
        type="text"
        placeholder='First Name'
        name='firstName'
        />
        <br/>
        {submitted && !value.firstName ? <span id="lastname=error">Please enter a first name</span> : null}
        <br/>
        <input
        onChange={lastNameinputChangeHandler}
        value={value.lastName}
        id="last-name"
        class='form-field'
        type="text"
        placeholder='Last Name'
        name='lastName'
        />
        <br/>
        {submitted && !value.lastName ? <span id="lastname-error">Please enter your last name</span> : null}
        <br/>
        <input
        onChange={emailinputChangeHandler}
        value={value.email}
        id="email"
        class='form-field'
        type="email"
        placeholder='Your Email address'
        name='email'
        />
        <br/>
        {submitted && !value.email ? <span id="email-error">Please enter your email address</span> : null}
        
        <br/>
        <br/>
        <button type="submit">Register</button>

      </form>
    </div>
  );
}

export default App;

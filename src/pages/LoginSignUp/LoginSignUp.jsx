import React from 'react'
import './LoginSignUp.css'


//For Login page
const LoginSignUp = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
          <div className="loginsignup-fields">
             <input type='text' placeholder='Your name' />
             <input type='email' placeholder='Email' />
             <input type='password' placeholder='Password' />
          </div>
           <button>Continue</button>
          <p className="loginsignup-login">Already have an account? <span>Login here</span></p>
          <div className="loginsignup-agree">
            <input type='checkbox' name='' id='' />
            <p>By continuing, I agree to the terms of use and privacy.</p>
          </div>
      </div>
    </div>
  )
}

export default LoginSignUp
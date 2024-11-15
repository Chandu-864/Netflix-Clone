import React, { useState } from 'react'
import './Login.css'
import loginLogo from '../../assets/logo.png'
import {login, approveSignUp} from '../../FireStorage'

const Login = () => {

  const [signOptions, setSignoptions] = useState("Sign In");

  const signUp = () => setSignoptions("Sign Up");

  const signIn = () => setSignoptions("Sign In");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleAuth = async (event) => {
    event.preventDefault();
    if (signOptions === "Sign In") {
      await login(email,password);
    }
    else{
      await approveSignUp(name, email, password);
    }
  }
  

  return (
    <div className='login'>
      <img src={loginLogo} alt="" className='login-logo' />
      <div className="login-form">

        <h1>{signOptions}</h1>

        <form>
        {signOptions === "Sign Up" ? <input type="text" placeholder='Enter your name' value={name} onChange={(e) =>setName(e.target.value)} /> : <></>}
          <input type="email" placeholder='Enter your e-mail' value={email} onChange={(e) =>setEmail(e.target.value)} />
          <input type="password" placeholder='Enter password' value={password} onChange={(e) =>setPassword(e.target.value)} />
          <button onClick={handleAuth} type='submit' >{signOptions}</button>

          <div className="form-help">

            <div className="remember">
              <input type="checkbox" className='help'/>
              <label htmlFor="help">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>

        <div className="form-switch">
          {signOptions === "Sign In" ? <p>New to Netflix? <span onClick={signUp}>Sign Up Now</span></p>
                                     :<p>Existing User? <span onClick={signIn}>Sign in Now</span></p>}
        </div>

      </div>
    </div>
  )
}

export default Login
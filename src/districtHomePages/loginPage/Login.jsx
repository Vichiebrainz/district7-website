import React from 'react'
import { Link } from 'react-router-dom'
import regLogo from '../../assets/regLogo.png'
import google from '../../assets/google.png'
import '../registerPage/register.css'
function Login() {
  return (
    <div className="register d-flex">
      <div className="register-left d-flex justify-content-center align-items-center">
        <div className="reg-left-inner d-flex flex-column  align-items-center">
          <h1>Log in</h1>
          <form action="">
            <button className='login-google d-flex justify-content-center align-items-center'>
              <img src={google} alt="" /> Sign in with google
            </button>
            <div className="reg-form-group">
              <label htmlFor="">Email Address</label>
              <input type="text" />
            </div>
            <div className="reg-form-group">
              <label htmlFor="">Phone Number</label>
              <input type="text" />
            </div>

            <button>PROCEED</button>
            <div className="reg-form-group align-items-center">
              <span>Don't have an account yet?<Link to='/register'> Sign Up</Link></span>
            </div>
          </form>
        </div>
      </div>
      <div className="register-right d-flex align-items-center">
        <div className="reg-right-inner d-flex flex-column justify-content-between align-items-start">
          <h1>Secure the best accomodations with us</h1>

          <Link to='/'>
            <img src={regLogo} alt="" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login
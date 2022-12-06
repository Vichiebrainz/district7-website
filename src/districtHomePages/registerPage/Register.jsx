import React from 'react'
import { Link } from 'react-router-dom'
import regLogo from '../../assets/regLogo.png'
import './register.css'
function Register() {
    return (
        <div className="register d-flex">
            <div className="register-left d-flex justify-content-center align-items-center">
                <div className="reg-left-inner d-flex flex-column  align-items-center">
                    <h1>Sign Up</h1>
                    <form action="">
                        <div className="reg-form-flex d-flex align-items-center justify-content-between">
                            <div className="reg-form-group reg-input-1">
                                <label htmlFor="">First Name</label>
                                <input type="text" />
                            </div>
                            <div className="reg-form-group reg-input-2">
                                <label htmlFor="">last Name</label>
                                <input type="text" />
                            </div>
                        </div>
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
                            <span>Already have an account?<Link to='/login'> Log In</Link></span>
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

export default Register
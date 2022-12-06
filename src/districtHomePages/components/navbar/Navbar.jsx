import React from 'react'
import navLogo from '../../../assets/logo.png'
import './navbar.css'
function Navbar() {
    return (
        <div className='navbar d-flex align-items-center justify-content-center'>
            <div className="navbar-main d-flex align-items-center justify-content-between">
                <div className="navbar-brand">
                    <a href="#"><img src={navLogo} alt="brand logo" /></a>
                </div>

                <div className="navbar-link d-flex align-items-center justify-content-between">
                    <ul className='d-flex align-items-center '>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Agents</a>
                        </li>
                        <li>
                            <a href="#">Features</a>
                        </li>
                    </ul>

                    <div className="navbar-buttons d-flex align-items-center">
                        <button>SIGN UP</button>
                        <button>lOG IN</button>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Navbar
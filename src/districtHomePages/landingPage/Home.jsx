import React from 'react'
import stayHappy from '../../assets/stayhappy.jpg'
import Footer from '../components/footer/Footer'
import { BiSearch } from 'react-icons/bi';
import Navbar from '../components/navbar/Navbar'
import './home.css'
function Home() {
    return (
        <div>
            {/* Navbar  */}
            <Navbar />
            {/* // Showcase Section  */}
            <div className="showcase d-flex align-items-center justify-content-center">
                <div className="showcase-inner d-flex flex-column align-items-center justify-content-around">
                    <div className="form-case w-100 d-flex justify-content-between">
                        <input type="text" placeholder="Search Houses With Locations" />
                        <button><BiSearch/></button>
                    </div>

                    <div className="text-case d-flex flex-column align-items-center justify-content-center text-center">
                        <h1>Find  Apartments and get Your <span>Dream Spaces</span></h1>
                        <p>We provide access to thousands of house listings in any area of your choice. The best stress free way of securing suitable accomodation</p>
                    </div>
                </div>
            </div>

            {/* What We Offer Section  */}
            <div className="offer-main d-flex flex-column align-items-center justify-content-center">
                <h1>What we offer</h1>
                <div className="offer-inner d-flex align-items-center justify-content-center flex-wrap">
                    <div className="offer-item">
                        <h3>Stress free</h3>
                        <p>We make search for
                            houses easy as this could
                            be done from the comfort
                            of your homes.</p>
                    </div>
                    <div className="offer-item">
                        <h3>Cheap rate</h3>
                        <p>We offer the cheapest
                            apartments for rent by
                            eliminating the cost
                            of middle man.</p>
                    </div>
                    <div className="offer-item">
                        <h3>High Quality</h3>
                        <p>We recommend the
                            best type of houses
                            for rent.</p>
                    </div>
                    <div className="offer-item">
                        <h3>Secured Transaction</h3>
                        <p>We strictly monitor all
                            payments and ensure
                            all transactions are
                            secured.</p>
                    </div>
                    <div className="offer-item">
                        <h3>Comfortability</h3>
                        <p>We help you create a
                            comfortable space
                            for yourself &
                            family.</p>
                    </div>
                </div>
                <div className="offer-button-div d-flex flex-column align-items-center justify-content-center">
                    <button>Get started</button>
                    <p>Join our waitlist to know when we go live</p>
                </div>
            </div>

            {/* Stay Happy Section  */}
            <div className="stay-happy-main d-flex align-items-center justify-content-center">
                <div className="stay-happy-inner d-flex align-items-center justify-content-between">
                    <div className="stay-happy-left">
                        <img src={stayHappy} alt="" />
                    </div>
                    <div className="stay-happy-right d-flex align-items-center justify-content-center">
                        <div className="stay-happy-right-inner">
                            <h1>Stay happy with your refunds</h1>
                            <p>We ensure you are refunded within 4 days of request if you are not satisfied with our houses.</p>
                            <div className="stay-happy-button">
                                <button>Get Started</button>
                                <span>Join our waitlist to know when we go live</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Find the best tenants Section  */}
            <div className="best-tenants-main d-flex flex-column align-items-center ">
                <div className="best-tenants-upper">
                    <h2>For Agents & Landlords</h2>
                </div>
                <div className="best-tenants-lower d-flex align-items-center justify-content-center">
                    <div className="best-tenants-lower-inner d-flex flex-column justfiy-content-center align-items-center">
                        <h1>Find the best <span>Tenants</span> for Your Houses listed</h1>
                        <p>We provide access to thousands of tenants listings for any of your houses. The best stress free way of securing potential responsible customers.</p>
                        <button>Get Started</button>
                        <span className='best-button-span'>Join our waitlist to know when we go live</span>
                    </div>
                </div>
            </div>

            {/* Footer  */}
            <Footer />
        </div>
    )
}

export default Home
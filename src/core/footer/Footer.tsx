import './Footer.css';
import { FaMapMarkerAlt,FaPhone, FaEnvelope } from "react-icons/fa";
import { FaFacebook,FaTwitter,FaLinkedin } from "react-icons/fa";
import logo from '../../assets/icons/logo.png';
import {FaCcPaypal,FaCcMastercard,FaCcVisa } from "react-icons/fa";
import {FaAngleRight } from "react-icons/fa";


export const Footer = () => {
    return (
        <>

            <section id='contact' className='footer_wrapper wrapper'>
                <div className='container pb-2'>
                    <div className='row'>
                        <div className='col-lg-3 col-sm-6'>
                            <div className='single-box'>
                            <img src={logo} className="Footer-brand" />
                           <h1>One Stop</h1>
                            <p>Thousands of Sri Lankans are served daily by OneStop, which has been operated by Sri Lankans for the past 5 years & provides the freshest products possible while still offering excellent value.</p>
                            <div className='contact-info'>
                                <ul className='list-unstyled'>
                                    <li><a href='#'><i className='fa fa-Map'></i><FaMapMarkerAlt/> 471, Galle Road, Colombo 3, Kollupitiya,<br/>Sri Lanka </a></li>
                                    <li><a href='#'><i className='fa fa-phone'></i> <FaPhone /> 011-2445670 </a></li>
                                    <li><a href='#'><i className='fa fa-envelope'></i><FaEnvelope /> onestop@gmail.com</a></li>
                                </ul>
                            <div className='social-icons'>
                                <ul>
                                    <a href='#'><i className='fa fa-facebook'></i><FaFacebook/></a>
                                    <a href='#'><i className='fa fa-twitter'></i> <FaTwitter/></a>
                                    <a href='#'><i className='fa fa-linked'></i><FaLinkedin/>  </a>
                                    </ul>
                                    </div> 
                            </div>
                        </div>
                        </div>
                        <div className='col-lg-3 col-sm-6'>
                        <div className='single'>
                            <h2> Company</h2>
                            <ul className='link-widget p-0'>
                            <li><a href='#'><i className='fa fa-right'></i><FaAngleRight/>Shop</a></li>
                                <li><a href='#'><i className='fa fa-right'></i><FaAngleRight/>About us</a></li>
                                <li><a href='#'><i className='fa fa-right'></i><FaAngleRight/>All products</a></li>
                                <li><a href='#'><i className='fa fa-right'></i><FaAngleRight/>Help</a></li>
                                <li><a href='#'><i className='fa fa-right'></i><FaAngleRight/>Information</a></li>
                                <li><a href='#'><i className='fa fa-right'></i><FaAngleRight/>Contact us</a></li>
                            </ul>
                        </div>
                        </div>
                        <div className='col-lg-3 col-sm-6'>
                        <div className='single'>
                            <h2> Services</h2>
                            <ul className='link-widget p-0'>
                            <li><a href='#'><i className='fa fa-right'></i><FaAngleRight/>Login</a></li>
                                <li><a href='#'><i className='fa fa-right'></i><FaAngleRight/>Wish List</a></li>
                                <li><a href='#'><i className='fa fa-right'></i><FaAngleRight/>My Account</a></li>
                                <li><a href='#'><i className='fa fa-right'></i><FaAngleRight/>Terms & Conditions</a></li>
                                <li><a href='#'><i className='fa fa-right'></i><FaAngleRight/>Promotional Offers</a></li>
                                <li><a href='#'><i className='fa fa-right'></i><FaAngleRight/>My Cart</a></li>
                            </ul>
                            </div>
                        </div>
                        <div className='col-lg-3 col-sm-6'>
                        <div className='single'>
                            <h2> Need Help</h2>
                            <h4>+ 25 500-250-0001</h4>
                            <h3 className='fs-4 pb-2'>We Accept</h3>
                            <div className='card-section'>
                    <ul>
                                    <a href='#'><i className='fa fa-paypal'><FaCcPaypal/></i></a>
                                    <a href='#'><i className='fa fa-phone'></i> <FaCcMastercard /></a>
                                    <a href='#'><i className='fa fa-envelope'></i><FaCcVisa/></a>
                                </ul>
                                </div>
                        </div>
                        </div>
                    </div>
                    <div className='container fluid copyright-section'>
                        <p className='p-0'>Copyright <a href='#'>© 2023 One Stop</a> All Rights Reserved</p>
                    </div>
                    </div>
            </section>
        </>

    )
}





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
                            <p>Lorem Ipsum is simply dummy text of<br/> the and typesetting industry. Lorem<br/> Ipsum is dummy text of the printing.</p>
                            <div className='contact-info'>
                                <ul className='list-unstyled'>
                                    <li><a href='#'><i className='fa fa-Map'></i><FaMapMarkerAlt/> 271, Galle Road, Colombo 3,<br/> Kollupitiya,Sri Lanka </a></li>
                                    <li><a href='#'><i className='fa fa-phone'></i> <FaPhone /> +423-845-6570 </a></li>
                                    <li><a href='#'><i className='fa fa-envelope'></i><FaEnvelope /> random@email.com </a></li>
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





import './Footer.css';
import { FaPhone } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import logo from '../../assets/icons/logo.svg';

export const Footer = () => {
    return (
        <>
        
        <section id='contact' className='footer_wrapper wrapper'>
            <div className='container pb-3'>
                <div className='row'>
                    <div className='col-lg-3 col-md-6 mb-4'>
                    <img className="Footer-brand" src={logo} />One Stop
                        <div className='contact info'>
                            <ul className='list-unstyled'>
                                <li><a href='#'><i className='fa fa-home me-3'></i> No. 96, South city, London </a></li>
                                <li><a href='#'><i className='fa fa-phone me-3'></i> <FaPhone/> +423-845-6570 </a></li>
                                <li><a href='#'><i className='fa fa-envelope me-3'></i> random@email.com </a></li>
                            </ul>
                        </div>
                    </div>
                   <div className='col-lg-3 col-md-6 mb-4'>
                    <h5> More Links</h5>
                    <ul className='link-widget p-0'>
                    <li><a href='#'>About us</a></li>
                    <li><a href='#'>About us</a></li>
                    <li><a href='#'>About us</a></li>
                    <li><a href='#'>About us</a></li>
                    <li><a href='#'>About us</a></li>
                    <li><a href='#'>About us</a></li>
                    </ul>
                   </div>
                   <div className='col-lg-3 col-md-6 mb-4'>
                    <h5> More Links</h5>
                    <ul className='link-widget p-0'>
                    <li><a href='#'>About us</a></li>
                    <li><a href='#'>About us</a></li>
                    <li><a href='#'>About us</a></li>
                    <li><a href='#'>About us</a></li>
                    <li><a href='#'>About us</a></li>
                    <li><a href='#'>About us</a></li>
                    </ul>
                   </div>
                   <div className='col-lg-3 col-md-6 mb-4'>
                    <h5> Need Help</h5>
                    <h3>+ 25 500-250-0001</h3>
                    <h5>Stay connected</h5>
                   <ul className='social network d-flex align-item-center p-0'>
                   <li><a href='#'><i className='fab fa-facebook-f'></i><FaFacebook/></a></li>
                   <li><a href='#'><i className='fab fa-twitter'></i></a></li>
                   <li><a href='#'><i className='fab fa-google-plus-g'></i></a></li>
                   </ul>
                </div>
                </div>
                <div className='container fluid copyright-section'>
                    <p className='p-0'>Copyright <a href='#'>© 2023 One Stop</a> All Rights Reserved</p>
                </div>
            </div>
        </section></>
         
    )
}

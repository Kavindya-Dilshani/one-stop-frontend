import Client1 from '../../../../assets/images/Client1.jpg';
import Client2 from '../../../../assets/images/Client2.jpg';
import Client3 from '../../../../assets/images/Client3.jpg';
import './Testimonial.css';
import { FaStar } from "react-icons/fa";


export const Testimonial = () => {
    return (
        <section className='testimonial py-3'>
            <div className="testimonial-container text -center">
                <div className="row">
                    <div className="col-lg-9 m-auto">
                        <div className="col-sm-12 col-lg-8 offset-lg-2 text-center">
                            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src={Client1} className="img-fluid avatar mb-4" alt="..." />
                                        <p className='perac'>We are busy people having no time to shop.
                                        One Stop solves our problem by delivering products at door step WHENEVER we want. 
                                        Thank you One Stop</p>
                                        <ul>
                                            <a href='#'><i className='fab fa-facebook-f'></i><FaStar /></a>
                                            <a href='#'><i className='fab fa-facebook-f'></i><FaStar /></a>
                                            <a href='#'><i className='fab fa-facebook-f'></i><FaStar /></a>
                                            <a href='#'><i className='fab fa-facebook-f'></i><FaStar /></a>
                                        </ul>
                                        <h4> Andrei</h4>
                                    </div>
                                    <div className="carousel-item">
                                        <img src={Client2} className="img-fluid mb-4 avatar" alt="..." />
                                        <p className='perac'>I could not find some products anywhere in near by super markets.
                                         But I am able to find all the products in One Stop website</p>
                                        <ul>
                                            <a href='#'><i className='fab fa-facebook-f'></i><FaStar /></a>
                                            <a href='#'><i className='fab fa-facebook-f'></i><FaStar /></a>
                                            <a href='#'><i className='fab fa-facebook-f'></i><FaStar /></a>
                                            <a href='#'><i className='fab fa-facebook-f'></i><FaStar /></a>
                                        </ul>
                                        <h4> Andrei</h4>
                                    </div>
                                    <div className="carousel-item">
                                        <img src={Client3} className="img-fluid mb-4 avatar" alt="..." />
                                        <p className='perac'>Prices are very fair. Excellent grocery store.
                                         All products are selected and delivered with considerable care</p>
                                        <ul>
                                            <a href='#'><i className='fab fa-facebook-f'></i><FaStar /></a>
                                            <a href='#'><i className='fab fa-facebook-f'></i><FaStar /></a>
                                            <a href='#'><i className='fab fa-facebook-f'></i><FaStar /></a>
                                            <a href='#'><i className='fab fa-facebook-f'></i><FaStar /></a>
                                        </ul>
                                        <h4> Andrei</h4>
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}





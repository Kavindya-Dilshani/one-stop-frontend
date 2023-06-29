import Client1 from '../../../../assets/images/Client1.jpg';
import Client2 from '../../../../assets/images/Client2.jpg';
import Client3 from '../../../../assets/images/Client3.jpg';
import './Testimonial.css';
import { FaStar } from "react-icons/fa";


/*export const Testimonial = () => {
    return (
        <>
            <section id="testimonial py-5" className="testimonial" />
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-9 m-auto">
                
                <div className="col-sm-12 col-lg-8 offset-lg-2 text-center">
                    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="testimonial-wrapper">
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <img src={user1} className="img-fluid avatar mb-4" alt="" />
                                        </div>
                                        <div className="userName">
                                            <p>Some representative placeholder content for the first slide</p>
                                            <h3> Andrei USA</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="testimonial-wrapper">
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <img src={User2} className="img-fluid mb-4 avatar" alt="" />
                                        </div>
                                        <div className="userName">
                                            <p>Some representative placeholder content for the first slide</p>
                                            <h3> Andrei USA</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="testimonial-wrapper">
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <img src={user3} className="img-fluid mb-4 avatar" alt="" />
                                            </div>
                                            <div className="userName">
                                                <p>Some representative placeholder content for the first slide</p>
                                                <h3> Andrei USA</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
                </div>

        </>
    )
}*/



export const Testimonial = () => {
  return (
   <section className='testimonial py-3'>
    <div className="testimonial-container text -center py-2">
        <div className="row">
            <div className="col-lg-9 m-auto">
            <div className="col-sm-12 col-lg-8 offset-lg-2 text-center">
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={Client1} className="img-fluid avatar mb-4" alt="..."/>
      <p className='perac'>Some representative placeholder content for the first slide</p>
      <ul>
    <a href='#'><i className='fab fa-facebook-f'></i><FaStar /></a>
    <a href='#'><i className='fab fa-facebook-f'></i><FaStar /></a>
    <a href='#'><i className='fab fa-facebook-f'></i><FaStar /></a>
    <a href='#'><i className='fab fa-facebook-f'></i><FaStar /></a>
    </ul>
      <h4> Andrei</h4>
    </div>
    <div className="carousel-item">
      <img src={Client2} className="img-fluid mb-4 avatar" alt="..."/>
      <p className='perac'>Some representative placeholder content for the first slide</p>
      <ul>
    <a href='#'><i className='fab fa-facebook-f'></i><FaStar /></a>
    <a href='#'><i className='fab fa-facebook-f'></i><FaStar /></a>
    <a href='#'><i className='fab fa-facebook-f'></i><FaStar /></a>
    <a href='#'><i className='fab fa-facebook-f'></i><FaStar /></a>
    </ul>
      <h4> Andrei</h4>
    </div>
    <div className="carousel-item">
      <img src={Client3} className="img-fluid mb-4 avatar" alt="..."/>
      <p className='perac'>Some representative placeholder content for the first slide</p>
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





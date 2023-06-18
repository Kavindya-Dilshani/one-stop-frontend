import user1 from "../../assets/images/user1.jpg";
import user2 from "../../assets/images/user2.jpg";
import user3 from "../../assets/images/user3.jpg";
import './Testimonial.css';


export const Testimonial = () => {
    return (
        <>
            <section id="testimonial" className="testimonial" />
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                    </div>
                </div>
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
                                            <img src={user1} className="img-fluid" alt="" />
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
                                            <img src={user2} className="img-fluid" alt="" />
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
                                                <img src={user2} className="img-fluid" alt="" />
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

        </>
    )
}




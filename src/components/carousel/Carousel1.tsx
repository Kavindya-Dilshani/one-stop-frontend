import { Button } from "react-bootstrap";
import { Carousel1Config } from "../../utilities/config/Carousel1Config";


export const Carousel1 = () => {
    const Carousel1 = Carousel1Config.carousel1List;

    return (
        <>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                </div>
                <div className="carousel-inner" />
                <div className="carousel-item active" />
                <div className='row row-cols row-cols-md-4 g-4'>
                    {Carousel1 && Carousel1.map((carousel1, index) => {
                        return (
                            <div className='col' key={index}>
                                <div className='card'>
                                    <div className='product-image p-3 text-center'>
                                        <a className='link-card-product' href='#'>
                                            <img src={carousel1.image} className="img-fluid" />
                                        </a>
                                    </div>
                                </div>
                                <div className='cat-title text-center pt-3'>
                                    <h3>{carousel1.title}</h3>
                                    <del>$22.00</del><span>$10.00</span>
                                    <Button className="primary">Add to Cart</Button>
                                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                <span className="visually-hidden">Previous</span>
                                              </button>
                                              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                <span className="visually-hidden">Next</span>
                                              </button>
                                            </div>
                                       </div> 
                                          
                        );
                    })

                    }
                </div>
            </div>
        </>
    );

}












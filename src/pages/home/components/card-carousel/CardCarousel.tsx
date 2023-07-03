import { Button } from 'react-bootstrap';
import { CarouselConfig } from '../../../../utilities/config/Card-CarouselConfig';
import './CardCarousel.css';
import Strawberry from '../../../../assets/images/Strawberry.jpg';


export const CardCarousel = () => {
    const carousels = CarouselConfig.CardCarouselData;

    return (
        <>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                </div>
                <div className="carousels-inner" />
                <div className="carousels-item active" />
                <div className='row row-cols row-cols-md-4 g-4'>
                    {carousels && carousels.map((_carousels, index) => {
                        return (
                            <div className='col' key={index}>
                                <div className='card'>
                                    <div className='product-image p-3 text-center'>
                                        <a className='link-card-product' href='#'>
                                            <img src={_carousels.image} className="img-fluid" />
                                        </a>
                                    </div>
                                </div>
                                <div className='cat-title text-center pt-3'>
                                    <h3>{_carousels.title}</h3>
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
/*export const CardCarousel = () => {
    const carousels = CarouselConfig.CardCarouselData;
  return (
    <>
    <section className="CardCarousel">
        <div className="CardCarousel-row">
            <div className="r-box">
            {carousels && carousels.map((_carousels, index) => {
                        return (
                            <div className='col' key={index}>
                                <div className='card'>
                                    <div className='carousel-image p-3 text-center'>
                                        <a className='link-card-carousel' href='#'>
                                            <img src={_carousels.image} className="img-fluid" />
                                        </a>
                                    </div>
                                </div>
                                <div className='cat-title text-center pt-3'>
                                    <h3>{_carousels.title}</h3>
                                    <del>$22.00</del><span>$10.00</span>
                                    <Button className="primary">Add to Cart</Button>
                                        </div>
                            </div>
                        );
                    })

                    }
                </div>
            </div>
            </section>
        </>
    );

}*/














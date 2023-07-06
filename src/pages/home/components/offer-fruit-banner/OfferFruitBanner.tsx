
import './OfferFruitBanner.css';


export const OfferFruitBanner = () => {
    return (
        <section id="OfferFruitBanner">
            <div className="OfferFruitBanner-section">
                <div className="OfferFruitBanner-container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="fruit-text">
                                <h1>Weekend Offer</h1>
                                <p className='fs-2 text-start'> Get <span>30% off </span>
                                    On Organic fruits
                                </p>
                                <p className="fs-3 text-start">Only this weekend, So don't miss</p>
                                <div className='button py-5'>
                                <button type="button" className="btn btn-primary btn-lg">Shop Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

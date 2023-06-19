import './Offer.css';
import { OfferConfig } from '../../utilities/config/OfferConfig';
import banner1 from '../../assets/images/banner1.jpg';


export const Offer = () => {
    const Offers = OfferConfig.OfferList;

    return (
        <>
            <div className='row row-cols-1 row-cols-md-3 g-4'>
                {Offers && Offers.map((offer, index) => {
                    return (
                        <><div className='col' key={index}>
                            <div className='offer'>
                                <div className='product-image p-3 text-center'>
                                    <a className='link-offer-banner' href='#'>
                                        <img src={offer.image} className="img-fluid" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        </>
                    );
                })
                }
            </div>
            <div className='Offer image'>
                <img src={banner1} className="img-fluid" />

            </div>
        </>
    );
}






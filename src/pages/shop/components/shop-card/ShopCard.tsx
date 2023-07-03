import { Button } from 'react-bootstrap';
import './ShopCard.css';
import { ShopCardConfig } from '../../../../utilities/config/ShopCardConfig';
import { Link } from 'react-router-dom';


export const ShopCard = () => {
    const shopcards = ShopCardConfig.ShopCardData;
    return (
        <>
            <section id="ShopCard">
                <div className="ShopCard-section">
                <div className='ShopCard-container'>
                <div className='row'>
                    <div className='s-box'>
                <div className='row row-cols-1 row-cols-md-3 g-4'>
                    {shopcards && shopcards.map((shop, index) => {
                        return (
                            <div className='col' key={index}>
                                <div className='card h-100'>
                                    <div className='shopcard-image p-6  text-center'>
                                        <a className='link-shopcard-product' href='#'>
                                            <img src={shop.image} className="card-img-top" />
                                        </a>
                                        <div className='shopcard-title text-center pt-4'>
                                            <h3>{shop.title}</h3>
                                            <div className='shopcard-amount text-center'>
                                             <h3 className='fs-5'>{shop.amount}</h3>
                                            <div className='shopcard-button pt-2'>
                                            <Link to={shop.path}><Button variant="primary">Shop Now</Button></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                            </div> 
                        );
                    })
                    }
                    </div>
                    </div>
                </div>
                </div>
                </div>
            </section>
        </>

    )
}






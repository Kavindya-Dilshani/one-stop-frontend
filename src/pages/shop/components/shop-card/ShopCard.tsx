import { Button } from 'react-bootstrap';
import './ShopCard.css';
import { ShopCardConfig } from '../../../../utilities/config/ShopCardConfig';


export const ShopCard = () => {
    const shopcards = ShopCardConfig.ShopCardData;
    return (
        <>
            <section id="ShopCard">
                <div className="ShopCard-section">
                    <div className="ShopCard -heading  pb-3">
                        <h3> All Collections</h3>
                    </div>
                </div>
                <br/>
                <br/>

                <div className='container'></div>
                <div className='row'></div>
                <div className='row row-cols-2 row-cols-md-3 g-4'>
                    {shopcards && shopcards.map((shop, index) => {
                        return (
                            <div className='col' key={index}>
                                <div className='card'>
                                    <div className='product-image p-6  text-center'>
                                        <a className='link-shopcard-product' href='#'>
                                            <img src={shop.image} className="card-img-top" />
                                        </a>
                                        <div className='shopcard-title text-center pt-4'>
                                            <h3>{shop.title}</h3>
                                            <h4>8 items</h4>
                                            <div className='category-button pt-2' />
                                            <Button variant="primary">Shop Now</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                    }
                </div>
            </section>
        </>

    )
}






import { Button } from 'react-bootstrap';
import { CardTileListConfig } from '../../../../utilities/config/CardTileListConfig';
import './CardDiscount.css';
import { FaStar } from "react-icons/fa";



export const CardDiscount = () => {
    const cards = CardTileListConfig.CardDiscountData;
    return (
        <>
            <section className='CardDiscount' id='CardDiscount'>
                <div className='CardDiscount-container'>
                    <div className='row'>
                        <div className='box'>
                            <div className='row row-cols-1 row-cols-md-3 g-4'>
                                {cards && cards.map((_cards, index) => {
                                    return (
                                        <div className='col' key={index}>
                                            <div className='card'>
                                                <div className='product-image p-6  text-center'>
                                                    <a className='link-card-product' href='#'>
                                                        <img src={_cards.image} className="card-img-top" />
                                                    </a>
                                                    <div className='category-title text-center'>
                                                        <h3 className='fs-5'>{_cards.title}</h3>
                                                        <div className='category-star'>
                                                            <ul>
                                                                <a href='#'><i className='fab fa-facebook-f'></i><FaStar /></a>
                                                                <a href='#'><i className='fab fa-facebook-f'></i><FaStar /></a>
                                                                <a href='#'><i className='fab fa-facebook-f'></i><FaStar /></a>
                                                                <a href='#'><i className='fab fa-facebook-f'></i><FaStar /></a>
                                                            </ul>
                                                            <div className='category-title text-center'>
                                                            <h3 className='fs-5'>{_cards.title}</h3>
                                                            <div className='category-price text-center'>
                                                                <h3 className='fs-5'>{_cards.price}</h3>
                                                                <div className='category-button'>
                                                                <Button variant="primary">Add to Cart</Button>
                                                                </div>
                                                            </div>
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
            </section>
        </>

    )
}














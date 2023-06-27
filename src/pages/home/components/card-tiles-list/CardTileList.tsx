import './CardTileList.css';
import Button from 'react-bootstrap/Button';
import { CardTileListConfig } from '../../../../utilities/config/CardTileListConfig';
import { FaEye } from "react-icons/fa";
import { FaShoppingBasket } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";


/*export const CardTileList = () => {
    const cards = CardConfig.CardTileData;

    return (
        <>
            <div className='container'></div>
            <div className='row'></div>
            <div className='row row-cols-2 row-cols-md-4 g-2'>
                {cards && cards.map((_card, index) => {
                    return (
                        <div className='col' key={index}>
                            <div className='card'>
                                <div className='product-image p-6  text-center'>
                                    <a className='link-card-product' href='#'>
                                        <img src={_card.image} className="card-img-top" />
                                    </a>
                                    <div className='category-title text-center pt-4'>
                                        <ul>
                                    <a href='#'><i className='fab fa-facebook-f'></i><FaStar /></a>
                                    <a href='#'><i className='fab fa-facebook-f'></i><FaStar /></a>
                                    <a href='#'><i className='fab fa-facebook-f'></i><FaStar /></a>
                                    <a href='#'><i className='fab fa-facebook-f'></i><FaStar /></a>
                                    </ul>
                                        <h3>{_card.title}</h3>
                                        <h4>$23.00</h4>
                                        <div className='category-button pt-2' />
                                        <Button variant="primary">Add to Cart</Button>
                                        <div className='card-details' />
                                        <ul>
                                            <a className='link-card-details' href='#'></a>
                                            <a href='#'><i className='fab fa-facebook-f'></i><FaEye /></a>
                                            <a href='#'><i className='fab fa-twitter'></i><FaShoppingCart /></a>
                                            <a href='#'><i className='fab fa-google-plus-g'></i><FaHeart /></a>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })
                }
            </div>
        </>
    );
}*/




export const CardTileList = () => {
    const cards = CardTileListConfig.CardTileData;
    return (
        <>
            <section className='CardTileList' id='CardTileList'>
                <div className='CardTileList-container'>
                    <div className='row'>
                        <div className='box'>
                            <div className='row row-cols-1 row-cols-md-4 g-4'>
                                {cards && cards.map((_card, index) => {
                                    return (
                                        <div className='col' key={index}>
                                            <div className='card'>
                                                <div className='product-image p-6  text-center'>
                                                    <a className='link-card-product' href='#'>
                                                        <img src={_card.image} className="card-img-top" />
                                                    </a>
                                                    <div className='category-star'>
                                                        <ul>
                                                            <a href='#'><i className='fab fa-facebook-f'></i><FaStar /></a>
                                                            <a href='#'><i className='fab fa-facebook-f'></i><FaStar /></a>
                                                            <a href='#'><i className='fab fa-facebook-f'></i><FaStar /></a>
                                                            <a href='#'><i className='fab fa-facebook-f'></i><FaStar /></a>
                                                        </ul>
                                                        <div className='category-title text-center'>
                                                            <h3 className='fs-6'>{_card.title}</h3>
                                                            <div className='category-price text-center'>
                                                                <h3 className='fs-5'>{_card.price}</h3>
                                                                <div className='category-button'>
                                                                <Button variant="primary">Add to Cart</Button>
                                                                <div className='discount-tag'>
                                                            <span className='discount'>-25%</span>
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






import './CardTileList.css';
import Button from 'react-bootstrap/Button';
import { CardConfig } from '../../../../utilities/config/CardConfig';
import { FaEye } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";


export const CardTileList = () => {
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
}





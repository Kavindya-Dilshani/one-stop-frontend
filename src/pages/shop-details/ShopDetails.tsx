import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { FaStar } from "react-icons/fa";
import { Button } from "react-bootstrap";
import './ShopDetails.css';
import { CardTileDetails } from "../../shared/models/CardTileListModels";
import { CardTileListConfig } from "../../utilities/config/CardTileListConfig";


export const ShopDetails = () => {
    const location = useLocation();
    const [cards, setGoods] = useState<CardTileDetails[]>();

    useEffect(() => {
        const activePath = location.pathname;
        switch (activePath) {
            case '/shop/fruits':
            case '/home/fruits':
                setGoods(CardTileListConfig.fruits);
                break;
            case '/shop/vegetable':
            case '/home/vegetable':
                setGoods(CardTileListConfig.vegetables);
                break;
            case '/shop/flour':
            case '/home/flour':
                setGoods(CardTileListConfig.flour);
                break;
            case '/shop/meat&fish':
            case '/home/meat&fish':
                setGoods(CardTileListConfig.meat);
                break;
            case '/shop/bakery':
            case '/home/bakery':
                setGoods(CardTileListConfig.bakery);
                break;
            case '/shop/diary':
            case '/home/diary':
                setGoods(CardTileListConfig.diary);
                break;
            default:
                break;
        }

    }, [location])





    return (
        <>
            {cards && (
                <section className='ShopDetails' id='ShopDetails'>
                    <div className='ShopDetails-container'>
                        <div className='row'>
                            <div className='box'>
                                <div className='row row-cols-1 row-cols-md-4 g-4'>
                                    {cards && cards.map((_cards, index) => {
                                        return (
                                            <div className='col' key={index}>
                                                <div className='card h-100'>
                                                    <div className='details-image p-6  text-center'>
                                                        <a className='link-card-details' href='#'>
                                                            <img src={_cards.image} className="card-img-top" />
                                                        </a>
                                                        <div className='details-star'>
                                                            <ul>
                                                                <a href='#'><i className='fab fa-facebook-f'></i><FaStar /></a>
                                                                <a href='#'><i className='fab fa-facebook-f'></i><FaStar /></a>
                                                                <a href='#'><i className='fab fa-facebook-f'></i><FaStar /></a>
                                                                <a href='#'><i className='fab fa-facebook-f'></i><FaStar /></a>
                                                            </ul>
                                                            <div className='details-title text-center'>
                                                                <h3 className='fs-5'>{_cards.title}</h3>
                                                                        <div className='details-price text-center'>
                                                                    <h3 className='fs-5'>{_cards.price}</h3>
                                                                        <div className='details-button'>
                                                                        <Link to={_cards.path}><Button variant="primary">Add to Cart</Button></Link>
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
            )}
        </>

    )
}



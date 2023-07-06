import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { FaStar } from "react-icons/fa";
import { Button } from "react-bootstrap";
import { CardListConfig } from "../../utilities/config/CardListConfig";
import { CardListDetails } from "../../shared/models/CardListListModel";
import './ShopDetails.css';


export const ShopDetails = () => {
    const location = useLocation();
    const [goods, setGoods] = useState<CardListDetails[]>();

    useEffect(() => {
        const activePath = location.pathname;
        switch (activePath) {
            case '/shop/fruits':
            case '/home/fruits':
                setGoods(CardListConfig.fruits);
                break;
            case '/shop/vegetable':
            case '/home/vegetable':
                setGoods(CardListConfig.vegetables);
                break;
            case '/shop/flour':
            case '/home/flour':
                setGoods(CardListConfig.flour);
                break;
            case '/shop/meat&fish':
            case '/home/meat&fish':
                setGoods(CardListConfig.meat);
                break;
            case '/shop/bakery':
            case '/home/bakery':
                setGoods(CardListConfig.bakery);
                break;
            case '/shop/diary':
            case '/home/diary':
                setGoods(CardListConfig.diary);
                break;
            default:
                break;
        }

    }, [location])





    return (
        <>
            {goods && (
                <section className='ShopDetails' id='ShopDetails'>
                    <div className='ShopDetails-container'>
                        <div className='row'>
                            <div className='box'>
                                <div className='row row-cols-1 row-cols-md-4 g-4'>
                                    {goods && goods.map((_goods, index) => {
                                        return (
                                            <div className='col' key={index}>
                                                <div className='card h-100'>
                                                    <div className='details-image p-6  text-center'>
                                                        <a className='link-card-details' href='#'>
                                                            <img src={_goods.image} className="card-img-top" />
                                                        </a>
                                                        <div className='details-star'>
                                                            <ul>
                                                                <a href='#'><i className='fab fa-facebook-f'></i><FaStar /></a>
                                                                <a href='#'><i className='fab fa-facebook-f'></i><FaStar /></a>
                                                                <a href='#'><i className='fab fa-facebook-f'></i><FaStar /></a>
                                                                <a href='#'><i className='fab fa-facebook-f'></i><FaStar /></a>
                                                            </ul>
                                                            <div className='details-title text-center'>
                                                                <h3 className='fs-5'>{_goods.title}</h3>
                                                                <div className='details-price text-center'>
                                                                    <h3 className='fs-5'>{_goods.price}</h3>
                                                                    <div className='cardList-discount'>
                                                                        <h3 className='fs-6'>{_goods.discount}</h3>
                                                                        <div className='details-button'>
                                                                        <Link to={_goods.path}><Button variant="primary">Add to Cart</Button></Link>
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
            )}
        </>

    )
}



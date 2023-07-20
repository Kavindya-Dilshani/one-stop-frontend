import './CardTileList.css';
import Button from 'react-bootstrap/Button';
import { CardTileListConfig } from '../../../../utilities/config/CardTileListConfig';
import { FaStar } from "react-icons/fa";
import { CardTileDetails } from '../../../../shared/models/CardTileListModels';
import { useCart } from '../../../../utilities/cart/CartContext';



export const CardTileList = () => {

    const { addItem } = useCart();
    const cards = CardTileListConfig.CardTileData;

    const addItemHandler = (item: CardTileDetails) => {
        if (item) {
            const mappedItem = { itemId: item.id, itemName: item.title, itemPrice: item.price, imageSource: item.image, quantity: 1, totalPrice: parseInt(item.price) };
            addItem(mappedItem);
        }
    }

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
                                                            <h3 className='fs-5'>{_card.title}</h3>
                                                            <div className='category-price text-center'>
                                                                <h3 className='fs-5'>Rs:{_card.price}</h3>
                                                                <div className='category-button'>
                                                                    <Button variant="primary" onClick={() => addItemHandler(_card)}>Add to Cart</Button>
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






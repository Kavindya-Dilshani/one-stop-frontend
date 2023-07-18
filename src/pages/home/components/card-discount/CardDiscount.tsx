import { Button } from 'react-bootstrap';
import { CardTileListConfig } from '../../../../utilities/config/CardTileListConfig';
import './CardDiscount.css';
import { FaStar } from "react-icons/fa";
import { useCart } from '../../../../utilities/cart/CartContext';
import { CardTileDetails } from '../../../../shared/models/CardTileListModels';



export const CardDiscount = () => {
    const { addItem } = useCart();
    const cards = CardTileListConfig.CardDiscountData;

    const addItemHandler = (item: CardTileDetails) => {
        if (item) {
            const mappedItem = { itemId: item.id, itemName: item.title, itemPrice: item.price, imageSource: item.image, quantity: 1, totalPrice: parseInt(item.price) };
            addItem(mappedItem);
        }
    }

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
                                                            <div className='category-price text-center'>
                                                                <h3 className='fs-5'>{_cards.price}</h3>
                                                                <div className='category-button'>
                                                                <Button variant="primary" onClick={() => addItemHandler(_cards)}>Add to Cart</Button>
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














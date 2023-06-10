import './Card.css';
import Button from 'react-bootstrap/Button';
import { CardConfig } from '../../utilities/config/CardConfig';


export const Cards = () => {
    const Cards = CardConfig.CardList;

    return (
        <>
            <div className='row row-cols-1 row-cols-md-3 g-4'>
                {Cards && Cards.map((_card, index) => {
                    return (
                        <div className='col' key={index}>
                            <div className='card'>
                                <div className='product-image p-3 text-center'>
                                    <a className='link-card-product' href='#'>
                                        <img src={_card.image} className="img-fluid" />
                                    </a>
                                </div>
                            </div>
                            <div className='cat-title text-center pt-3'>
                                <h3>{_card.title}</h3>
                                <Button variant="primary">Add to Cart</Button>
                            </div>
                        </div>
                    );
                })
                }

            </div>
        </>
    );
}





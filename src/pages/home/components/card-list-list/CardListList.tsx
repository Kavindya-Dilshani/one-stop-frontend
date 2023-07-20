import './CardListList.css';
import { CardListConfig } from '../../../../utilities/config/CardListConfig';
import verticalimage from '../../../../assets/images/verticalimage.png'
import { FaStar } from "react-icons/fa";


export const CardListList = () => {
    const items = CardListConfig.CardListData;
    return (
        <section className='CardList' id='CardList'>
            <h1 className='heading'></h1>
            <div className='column'>
                <div className='vertical-image'>
                    <img src={verticalimage} className="rounded float-start" alt='' />
                </div>
                <div className='box-container'>
                    <div className='box'>
                        <div className='row row-cols-1 row-cols-md-2 g-4'>
                            {items && items.map((_item, index) => {
                                return (
                                    <div className='col' key={index}>
                                        <div className='card'>
                                            <div className='product-image p-6  text-start'>
                                                <a className='card-product' href='#'>
                                                    <img src={_item.image} className="rounded float-start" />
                                                </a>
                                                <div className='cardList-title ms-2'>
                                                    <h3>{_item.title}</h3>
                                                    <div className='category-star'>
                                                        <ul>
                                                            <a href='#'><i className='fab fa-facebook-f'></i><FaStar /></a>
                                                            <a href='#'><i className='fab fa-facebook-f'></i><FaStar /></a>
                                                            <a href='#'><i className='fab fa-facebook-f'></i><FaStar /></a>
                                                            <a href='#'><i className='fab fa-facebook-f'></i><FaStar /></a>
                                                        </ul>
                                                        <div className='cardList-discount d-flex'>
                                                            <h3 className='text-decoration-line-through'>Rs:{_item.discount}</h3>
                                                            <div className='cardList-price d-flex'>
                                                                <h3>Rs:{_item.price}</h3>
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
    )
}







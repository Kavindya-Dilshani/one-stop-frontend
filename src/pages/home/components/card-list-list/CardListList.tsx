import './CardListList.css';
import background from '../../assets/images/background image.jpg';
import { CardListConfig } from '../../../../utilities/config/CardListConfig';
import verticalimage from '../../../../assets/images/verticalimage.png'
import { FaStar } from "react-icons/fa";


/*export const CardListList = () => {
    const cards = CardConfig.CardListData;

    /*return (
        <>
        
                {Card1 && Card1.map((card1, index) => {
                    return (
                        <div className='col' key={index}>
                             <div className="row g-0">
                             <div className="col-md-4"></div>
                            <div className='card'>
                                <div className='product-image p-3 text-top'>
                                    <a className='link-card-product' href='#'>
                                        <img src={card1.image} className="img-fluid rounded-start" />
                                    </a>
                                </div>
                            </div>
                            <div className="card1-body">
                           <h1 className="card1-title">Apple</h1>
                           <p className="card1-text"><small className="text-muted">Last updated 3 mins ago</small></p>
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

/*return (
    <>

        <div className="card1 mb-2" >
            {cards && cards.map((item, index) => {
                return (
                    <div className='col' key={index}>
                        <div className="row g-0">
                            <div className="col-md-4 text-top">
                                <img src={item.image} className="img-fluid rounded-start" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card1-title">Card1 title</h5>
                                    <p className="card1-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p className="card1-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>

                );
            })
            }
        </div>
    </>
)

}/*

*/


/*export const CardListList = () => {
    const items = CardListConfig.CardListData;
    return (

        <>
           <section className='CardList' id='CardList'>
            <h1 className='heading'></h1>
            <div className='column'>
                <div className='vertical-image'>
                    <img src={verticalimage} className="rounded float-start" alt='' />
                </div>

                    <div className='right-row'>
                        <div className='row justify-content-end'>
                            <div className="cols-lg-4">
                                <div className='discount'>
                                    <div className="card">
                                        {items && items.map((item, index) => {
                                            return (
                                                <div className='col' key={index}>
                                                    <div className="row">
                                                        <div className="col-md-2  py-2 text-top">
                                                            <img src={item.image} className="img-fluid" />
                                                        </div>
                                                        <div className="col-md-8">
                                                            <div className="card-body">
                                                                <h5 className="card1-title">Card1 title</h5>
                                                                <a href='#'><i className='fab fa-facebook-f'></i><FaStar /></a>
                                                                <a href='#'><i className='fab fa-facebook-f'></i><FaStar /></a>
                                                                <a href='#'><i className='fab fa-facebook-f'></i><FaStar /></a>
                                                                <a href='#'><i className='fab fa-facebook-f'></i><FaStar /></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        </div>
                    
            
            </section>
        </>


    )

}*/




export const CardListList = () => {
    const items = CardListConfig.CardListData;
    return (
        <section className='CardList' id='CardList'>
            <h1 className='heading'></h1>
            <div className='column'>
                <div className='vertical-image'>
                    <img src={verticalimage} className="rounded float-start"  alt='' />
                </div>
                <div className='box-container'>
                    <div className='box'>
                        <div className='row row-cols-1 row-cols-md-2 g-4'>
                            {items && items.map((_item, index) => {
                                return (
                                    <div className='col' key={index}>
                                        <div className='card'>
                                            <div className='product-image p-6  text-center'>
                                                <a className='link-card-product' href='#'>
                                                    <img src={_item.image} className="img-fluid" />
                                                </a>
                                                <div className='category-star'>
                                                    <ul>
                                                        <a href='#'><i className='fab fa-facebook-f'></i><FaStar /></a>
                                                        <a href='#'><i className='fab fa-facebook-f'></i><FaStar /></a>
                                                        <a href='#'><i className='fab fa-facebook-f'></i><FaStar /></a>
                                                        <a href='#'><i className='fab fa-facebook-f'></i><FaStar /></a>
                                                    </ul>
                                                    <div className='cardList-title text-center'>
                                                        <h3 className='fs-6'>{_item.title}</h3>
                                                        <div className='cardList-price text-center'>
                                                            <h3 className='fs-5'>{_item.price}</h3>
                                                            <div className='cardList-discount'>
                                                            <h3 className='fs-6'>{_item.discount}</h3>
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













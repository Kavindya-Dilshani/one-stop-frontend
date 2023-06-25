import './CardListList.css';
import background from '../../assets/images/background image.jpg';
import { CardConfig } from '../../../../utilities/config/CardConfig';
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


export const CardListList = () => {
    const cards = CardConfig.CardListData;
    return (

        <>
            <section className='aboutHome'>
                <div className='container flexSB'>
                    <div className="row">
                    <div className='row row-cols-2 row-cols-md-2 g-4'>
                    <div className='left row'>
                        <img src={verticalimage} alt='' />
                    </div>

                    <div className='right row'>
                        <div className='row justify-content-end'>
                            <div className="cols-lg-4">
                                <div className='discount'>
                                    <div className="card1">
                                        {cards && cards.map((item, index) => {
                                            return (
                                                <div className='col' key={index}>
                                                    <div className="row md-2 g-2">
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
                    </div>
                </div>
            </section>
        </>


    )

}



  









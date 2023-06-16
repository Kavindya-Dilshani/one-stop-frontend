import './Card1.css';
import { Card1Config } from '../../utilities/config/Card1Config';
import background from '../../assets/images/background image.jpg';

export const Card1 = () => {
    const Card1 = Card1Config.Card1List;

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

return (
        <>

    <div className="card1 mb-2" >
        {Card1 && Card1.map((card1, index) => {
            return (
                <div className='col' key={index}>
                    <div className="row g-0">
                        <div className="col-md-4 text-top">
                            <img src={card1.image} className="img-fluid rounded-start" />
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
      
}  
      

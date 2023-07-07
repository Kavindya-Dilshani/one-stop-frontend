import './AboutCard.css';
import organic from '../../../../assets/images/organic.png';
import price from '../../../../assets/images/price.png';
import easy from '../../../../assets/images/easy.png';

/*export const AboutCard = () => {
  return (
    <section className="provide py-5">
      <div className="container text-center py-5">
        <h2>What We Provide</h2>
        <div className="row py-5">
          <div className="col-lg-4">
            <div className="card p-3">
              <div className="card-body text-center">
                <div className="cir1 pt-2 mb-3">
                  <img src={organic} className="img-fluid" alt=""></img>
                </div>
                <h2>Fresh & 100% Organic</h2>
                <p className='py-3'>Lorem ipsum dolor sit ame it, consectetur  sed do  te mp or  ut .</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}*/



export const AboutCard = () => {
  return (
    <section className='provide' id='provide'>
      <div className='heading text-center py-3'>
        <h2>What We Provide</h2>
      </div>
      <div className='provide-container'>
        <div className='card'>
          <div className='p-box'>
            <img src={organic} className="img-fluid" alt=""></img>
            <h3>Fresh & 100% Organic</h3>
            <p className='py-2'>provide the freshest & 100% organic products for our customers</p>
          </div>
        </div>
        <div className='card'>
          <div className='p-box'>
            <img src={price} className="img-fluid" alt=""></img>
            <h3>Best Prices & Offers</h3>
            <p className='py-2'>Enjoy the same lowest prices as your local One Stop grocery store</p>
          </div>
        </div>
        <div className='card'>
          <div className='p-box'>
            <img src={easy} className="img-fluid" alt=""></img>
            <h3>Easy Returns</h3>
            <p className='py-2'>Return the product at the doorstep & get a refund within 24 hours</p>
          </div>
        </div>
      </div>
    </section>
  )
}







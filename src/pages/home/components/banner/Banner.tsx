
import './Banner.css';



export const Banner = () => {
  return (
    <>
    <section id="banner">
            <div className="banner-section">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="text-content text-start">
                                <h1>20% Discount For Your First Order</h1>
                                <p className='fs-2'>Stay Home & Get Your Daily
                                 Needs From Our Shop  
                                </p>
                                <p className="fs-5">Join our email subscription now to get updates on promotions and coupons.</p>
                            </div>
                            <form className='banner'>
                                <div className='row'>
                                    <div className="input-group mb-3">
                                  <input type="text" className="form-control" placeholder="Your email address" aria-label="Your email address" aria-describedby="basic-addon2"/>
                                <span className="input-group-text" id="basic-addon2">Subscribe</span>
                                 </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

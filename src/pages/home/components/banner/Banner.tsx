
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
                                    <h1><span>10%</span>Discount For Your First Order</h1>
                                    <p className='fs-1'>Stay Home & Get Your Daily
                                        <br />  Needs From Our Shop
                                    </p>
                                    <h4 className="fs-6">Join our email subscription now to get updates on promotions and coupons.</h4>
                                    <div className='newsletter'>
                                        <div className='row'>
                                            <div className='content'>
                                                <input type="email" className="form-control" name='' placeholder="Your email address" />
                                                <div className="input-group-append">
                                                    <button type="submit" className="btn btn-secondary">Subscribe</button>
                                                </div>
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

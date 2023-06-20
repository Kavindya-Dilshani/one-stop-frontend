
import './Offer2.css';

export const Offer2 = () => {
  return (
    <section id="special" className="special">
        <div className="container">
            <div className="row">
                <div className="col-sm-12"> 
                </div>
            </div>
            <div className="col-sm-12 col-lg-7 text-center">
                <div className="countdown-container">
                    <h2 className="text-uppercase">Exclusive Offer</h2>
                    <p className='fs-2'><span>Deals Of the Day</span>
                    <br/>
                    Organic Meat & Fish</p>
                    <ul className="list-unstyled countdown-container">
                        <li><span className="fs-1 d-block" id="days">00</span>Days</li>
                        <li><span className="fs-1 d-block" id="hours">00</span>Hours</li>
                        <li><span className="fs-1 d-block" id="Minutes">00</span>Minutes</li>
                        <li><span className="fs-1 d-block" id="Seconds">00</span>Seconds</li>
                    </ul>
                    <button type="button" className="btn btn-danger">Shop Now</button>
                </div>
            </div>
        </div>
    </section>
  )
}


import './OfferFishBanner.css';

/*export const OfferFishBanner = () => {
  return (
    <section id="special" className="special">
        <div className="fish-container">
            <div className="row">
                <div className="col-sm-12"> 
                </div>
            </div>
            <div className="col-sm-12 col-lg-7 text-start">
                <div className="fish-container">
                    <h2 className="text-start">Exclusive Offer</h2>
                    <p>Deals Of the Day <br/>Organic Meat & Fish</p>
                    <div className='button'/>
                    <button type="button" className="btn">Shop Now</button>
                </div>
            </div>
        </div>
    </section>
  )
}*/



export const OfferFishBanner = () => {
  return (
    <section id="OfferFishBanner">
    <div className="OfferFishBanner-section">
        <div className="OfferFishBanner-container">
            <div className="row">
                <div className="col-sm-12">
                    <div className="fish-text">
                        <h1>Exclusive Offer</h1>
                        <p className='fs-2 text-start'>Deals Of the Day<br/> <span>Organic Meat & Fish</span>
                                </p>
                        <div className='button py-5'>
                        <button type="button" className="btn btn-primary btn-lg">Shop Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
)
  }


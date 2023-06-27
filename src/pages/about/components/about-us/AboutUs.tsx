import './AboutUs.css';
import aboutimage1 from '../../../../assets/images/aboutimage1.jpg';
import aboutimage2 from '../../../../assets/images/aboutimage2.jpg';


export const AboutUs = () => {
  return (
    <section className='about py-2'>
      <div className="ShopCard-section">
        <div className="ShopCard -heading  pb-3">
          <h3> About Us </h3>
        </div>
      </div>
      <div className='container py-3'>
        <div className='row py-3'>
          <div className='image'></div>
          <div className="col-lg-3 py-3">
            <img src={aboutimage1} className="img-fluid" alt='' />
          </div>
          <div className="col-lg-3 pt-5">
            <img src={aboutimage2} className="img-fluid" alt='' />
          </div>
          <div className='row py-3'>
          <div className='col-lg-3'>
          </div>
            <p >Welcome</p>
            <h2 >One Stop Grocery Store</h2>
          <p>sellers who aspire to be good, do good, and spread goodness.
            <br />
            We democratic, self-sustaining, two-sided marketplace which thrives<br />  on trust
            and is built on community and quality content.</p>
            </div>  
        </div>
        </div>
    </section>
  )
}








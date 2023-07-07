import './AboutUs.css';
import aboutimage1 from '../../../../assets/images/aboutimage1.jpg';
import aboutimage2 from '../../../../assets/images/aboutimage2.jpg';


export const AboutUs = () => {
  return (
    <div className='about-area section-padding' id='about'>
      <div className='about-area-container'>
        <div className='row py-3'>
            <div className='image'/>
            <div className='col-lg-3 py-3'>
            <img src={aboutimage1} className="img-fluid" alt='' />
            </div>
          <div className='col-lg-3 pt-5 sm-3'>
            <img src={aboutimage2} className="img-fluid" alt='' />
            </div>
          <div className='col-lg-6 col-sm-12 py-3'>
            <div className='about-text pt-5'>
              <h3>Know more about our shop</h3>
              <h2 >One Stop <br/>Grocery Store</h2>
              <h4>we provide the freshest products possible while still offering excellent value</h4>
              <p className='fs-5'>Thousands of Sri Lankans are served daily by OneStop,
              which has been operated by Sri Lankans for the past 5 years & provides<br/> 
              the freshest products possible while still offering excellent value.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}









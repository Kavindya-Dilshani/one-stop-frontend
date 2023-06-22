import './Carousel.css';




export const Carousel = () => {
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      </div>
      <div className="carousel-inner py-12">
        <div className="carousel-item active">
          <section id='home'>
            <div className='container-fluid px-0 top-banner'>
              <div className='container'>
                <div className='row'>
                  <div className=' col-sm-12'>
                    <h3 className='fs-4'> 100% All Natural Products</h3>
                    <p className='fs-1'><span>Get Best Organic</span> Grocery
                      Products
                    </p>
                    <div className='mt-4'>
                      <button className='main-btn'>Shop Now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="carousel-item">
          
            <div className='container-fluid px-0 top-banner1'>
              <div className='container'>
                <div className='row'>
                  <div className=' col-sm-12'>
                  <div className="text-content-end"/>
                    <h3 className='fs-4'> 100% All Natural Products</h3>
                    <h2><span>Get Best Organic</span> Grocery
                      Products
                    </h2>
                    <div className='mt-4'>
                      <button className='main-btn'>Shop Now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;



/*export const Carousel = () => {
  return (
  <section id='home'>
    <div className='container-fluid px-0 top-banner'>
      <div className='container'>
        <div className='row'>
          <div className=' col-12'>
          <h3> 100% All Natural Products</h3>
          <h2><span>Get Best Organic</span> Grocery 
          Products
          </h2>
          <div className='mt-4'>
            <button className='main-btn'>Shop Now</button>
          </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}*/




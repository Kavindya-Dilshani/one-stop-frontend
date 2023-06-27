import './Counter.css';

export const Counter = () => {
  return (
   <section id="counter">
    <section className="counter-section">
        <div className="container">
            <div className="row text-center">
            <div className="col-md-3 mb-lg-0 mb-md-0 mb-5 mb-5">
            <h2>
                <span id="count1"></span>
            </h2>
            <p>Business Year</p>
            </div>   
            <div className="col-md-3 mb-lg-0 mb-md-0 mb-5 mb-5">
            <h2>
                <span id="count2"></span>
            </h2>
            <p>Products Sale</p>
            </div> 
            <div className="col-md-3 mb-lg-0 mb-md-0 mb-5 mb-5">
            <h2>
                <span id="count3"></span>
            </h2>
            <p>Happy User</p>
            </div>   
            </div>
        </div>
    </section>
   </section>
  )
}

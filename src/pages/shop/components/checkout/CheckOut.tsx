
import { useCart } from '../../../../utilities/cart/CartContext';
import './CheckOut.css';

/*export const CheckOut = () => {

  return (
    <div className="checkout-container">
      <div className="row">
        <div className="col-md-4 order-md-2 mb-4">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-muted">Your Order</span>
            <span className="badge badge-secondary badge-pill">3</span>
           </div>
          <ul className="list-group mb-3">
            <li className="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                <h6 className="my-0">Product Name</h6>
              </div>
              <span className="text-muted">$12</span>
            </li>
            <li className="list-group-item d-flex justify-content-between lh-condensed">
              <div className='checkout-body'>
              
                <h6 className="my-0">product</h6>
                </div>
              <span className="text-muted">$8</span>
            </li>
            <li className="list-group-item d-flex justify-content-between bg-light">
              <div className="text-success">
                <h6 className="my-0">Delivery charges</h6>
              </div>
              <span className="text-success">free</span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <span>Total price</span>
              <strong>$20</strong>
            </li>
          </ul>
            <div className="button text-center">
                <button type="submit" className="btn btn-primary">Place Order</button>
                </div>
     
        </div>

        <div className="col-md-6 col-sm-12 col-xs-12">
          <div className="contact-form ">
            <div className='checkout-title' >
              <h3 className='text-start'>Billing Address</h3>
              <form className="row g-3">
                <div className="col-md-6">
                  <label htmlFor="inputFirstName" className="form-label">First Name</label>
                  <input type="name" className="form-control" id="inputFirstName" />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputLastName" className="form-label">Last Name</label>
                  <input type="name" className="form-control" id="inputLastName" />
                </div>
                <div className="col-12">
                  <label htmlFor="inputAddress" className="form-label">Address</label>
                  <input type="text" className="form-control" id="inputAddress" />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputProvince" className="form-label">Province</label>
                  <input type="text" className="form-control" id="inputProvince" />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputCity" className="form-label">City</label>
                  <input type="text" className="form-control" id="inputCity" />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputPhoneNumber" className="form-label">Phone Number</label>
                  <input type="text" className="form-control" id="inputPhoneNumber" />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputCode" className="form-label">Delivery Code</label>
                  <input type="text" className="form-control" id="inputCode" />
                </div>
                <div className="col-12">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="gridCheck" />
                    <label className="form-check-label" htmlFor="gridCheck">
                      Save this information for next time
                    </label>
                  </div>
                </div>
                <div className='payment-Details'>
                  <h3 className='text-start'>Payment Methods</h3>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name='flexRadioDefault' id="flexRadioDefault1" />
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                      Credit Cards / Debit Cards
                    </label>
                    <div className="col-md-8">
                      <label htmlFor="inputCardHolderName" className="form-label">Card holder name</label>
                      <input type="text" className="form-control" id="inputCardHolderName" />
                    </div>
                    <div className="col-md-8">
                      <label htmlFor="inputCardNumber" className="form-label">Card Number</label>
                      <input type="text" className="form-control" id="inputCardNumber" />
                    </div>
                    <div className='row g-3'>
                      <div className="col-md-4">
                        <label htmlFor="inputExpiration" className="form-label">Expiration</label>
                        <input type="text" className="form-control" id="inputExpiration" />
                      </div>
                      <div className="col-md-4">
                        <label htmlFor="inputCVV" className="form-label">CVV</label>
                        <input type="text" className="form-control" id="inputCVV" />
                      </div>
                    </div>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name='flexRadioDefault' id="flexRadioDefault" />
                    <label className="form-check-label" htmlFor="flexRadioDefault">
                      Cash On Delivery
                    </label>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}*/


export const CheckOut = () => {
  const { getTotalPrice, getAllItems } = useCart();

  return (
    <div className="checkout-container">
      <div className="row">
        <div className="col-md-4 order-md-2 mb-4">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-muted">Your Order</span>
            <span className="badge badge-secondary badge-pill">3</span>
           </div>
          <ul className="list-group mb-3">
            <li className="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                <h6 className="my-0">Product Name</h6>
              </div>
              <span className="text-muted">$12</span>
            </li>
            <li className="list-group-item d-flex justify-content-between lh-condensed">
              <div className='checkout-body'>
              
                <h6 className="my-0">product</h6>
                </div>
              <span className="text-muted">$8</span>
            </li>
            <li className="list-group-item d-flex justify-content-between bg-light">
              <div className="text-success">
                <h6 className="my-0">Delivery charges</h6>
              </div>
              <span className="text-success">free</span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <span>Total price</span>
              <strong>$20</strong>
            </li>
          </ul>
            <div className="button text-center">
                <button type="submit" className="btn btn-primary">Place Order</button>
                </div>
     
        </div>

        <div className="col-md-6 col-sm-12 col-xs-12">
          <div className="contact-form ">
            <div className='checkout-title' >
              <h3 className='text-start'>Billing Address</h3>
              <form className="row g-3">
                <div className="col-md-6">
                  <label htmlFor="inputFirstName" className="form-label">First Name</label>
                  <input type="name" className="form-control" id="inputFirstName" />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputLastName" className="form-label">Last Name</label>
                  <input type="name" className="form-control" id="inputLastName" />
                </div>
                <div className="col-12">
                  <label htmlFor="inputAddress" className="form-label">Address</label>
                  <input type="text" className="form-control" id="inputAddress" />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputProvince" className="form-label">Province</label>
                  <input type="text" className="form-control" id="inputProvince" />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputCity" className="form-label">City</label>
                  <input type="text" className="form-control" id="inputCity" />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputPhoneNumber" className="form-label">Phone Number</label>
                  <input type="text" className="form-control" id="inputPhoneNumber" />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputCode" className="form-label">Delivery Code</label>
                  <input type="text" className="form-control" id="inputCode" />
                </div>
                <div className="col-12">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="gridCheck" />
                    <label className="form-check-label" htmlFor="gridCheck">
                      Save this information for next time
                    </label>
                  </div>
                </div>
                <div className='payment-Details'>
                  <h3 className='text-start'>Payment Methods</h3>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name='flexRadioDefault' id="flexRadioDefault1" />
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                      Credit Cards / Debit Cards
                    </label>
                    <div className="col-md-8">
                      <label htmlFor="inputCardHolderName" className="form-label">Card holder name</label>
                      <input type="text" className="form-control" id="inputCardHolderName" />
                    </div>
                    <div className="col-md-8">
                      <label htmlFor="inputCardNumber" className="form-label">Card Number</label>
                      <input type="text" className="form-control" id="inputCardNumber" />
                    </div>
                    <div className='row g-3'>
                      <div className="col-md-4">
                        <label htmlFor="inputExpiration" className="form-label">Expiration</label>
                        <input type="text" className="form-control" id="inputExpiration" />
                      </div>
                      <div className="col-md-4">
                        <label htmlFor="inputCVV" className="form-label">CVV</label>
                        <input type="text" className="form-control" id="inputCVV" />
                      </div>
                    </div>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name='flexRadioDefault' id="flexRadioDefault" />
                    <label className="form-check-label" htmlFor="flexRadioDefault">
                      Cash On Delivery
                    </label>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
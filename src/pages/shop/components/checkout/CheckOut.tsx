

/*export const CheckOut = () => {
  return (
    <div className="checkout-container">
        <div className="row">
    <div className="col-md-4 order-md-2 mb-4">
      <h4 className="d-flex justify-content-between align-items-center mb-3">
        <span className="text-muted">Your cart</span>
        <span className="badge badge-secondary badge-pill">3</span>
      </h4>
      <ul className="list-group mb-3">
        <li className="list-group-item d-flex justify-content-between lh-condensed">
          <div>
            <h6 className="my-0">Product name</h6>
            <small className="text-muted">Brief description</small>
          </div>
          <span className="text-muted">$12</span>
        </li>
        <li className="list-group-item d-flex justify-content-between lh-condensed">
          <div>
            <h6 className="my-0">Second product</h6>
            <small className="text-muted">Brief description</small>
          </div>
          <span className="text-muted">$8</span>
        </li>
        <li className="list-group-item d-flex justify-content-between lh-condensed">
          <div>
            <h6 className="my-0">Third item</h6>
            <small className="text-muted">Brief description</small>
          </div>
          <span className="text-muted">$5</span>
        </li>
        <li className="list-group-item d-flex justify-content-between bg-light">
          <div className="text-success">
            <h6 className="my-0">Promo code</h6>
            <small>EXAMPLE CODE</small>
          </div>
          <span className="text-success">-$5</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span>Total (USD)</span>
          <strong>$20</strong>
        </li>
      </ul>
      <form className="card p-2">
        <div className="input-group">
          <input type="text" className="form-control" placeholder="Promo code"/>
          <div className="input-group-append">
            <button type="submit" className="btn btn-secondary">Redeem</button>
          </div>
        </div>
      </form>
    </div>
    <div className="col-md-8 order-md-1">
      <h4 className="mb-3">Billing address</h4>
      <form className="needs-validation">
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="firstName">First name</label>
            <input type="text" className="form-control" id="firstName" placeholder="" value="" required/>
            <div className="invalid-feedback">
              Valid first name is required.
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="lastName">Last name</label>
            <input type="text" className="form-control" id="lastName" placeholder="" value="" required/>
            <div className="invalid-feedback">
              Valid last name is required.
            </div>
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="username">Username</label>
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">@</span>
            </div>
            <input type="text" className="form-control" id="username" placeholder="Username" required/>
            <div className="invalid-feedback">
              Your username is required.
            </div>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="email">Email <span className="text-muted">(Optional)</span></label>
          <input type="email" className="form-control" id="email" placeholder="you@example.com"/>
          <div className="invalid-feedback">
            Please enter a valid email address for shipping updates.
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="address">Address</label>
          <input type="text" className="form-control" id="address" placeholder="1234 Main St" required/>
          <div className="invalid-feedback">
            Please enter your shipping address.
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="address2">Address 2 <span className="text-muted">(Optional)</span></label>
          <input type="text" className="form-control" id="address2" placeholder="Apartment or suite"/>
        </div>

        <div className="row">
          <div className="col-md-5 mb-3">
            <label htmlFor="country">Country</label>
            <select className="custom-select d-block w-100" id="country" required>
              <option value="">Choose...</option>
              <option>United States</option>
            </select>
            <div className="invalid-feedback">
              Please select a valid country.
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="state">State</label>
            <select className="custom-select d-block w-100" id="state" required>
              <option value="">Choose...</option>
              <option>California</option>
            </select>
            <div className="invalid-feedback">
              Please provide a valid state.
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <label htmlFor="zip">Zip</label>
            <input type="text" className="form-control" id="zip" placeholder="" required/>
            <div className="invalid-feedback">
              Zip code required.
            </div>
          </div>
        </div>
        <div className="mb-4">
        <div className="custom-control custom-checkbox">
          <input type="checkbox" className="custom-control-input" id="same-address"/>
          <label className="custom-control-label" htmlFor="same-address">Shipping address is the same as my billing address</label>
        </div>
        <div className="custom-control custom-checkbox">
          <input type="checkbox" className="custom-control-input" id="save-info"/>
          <label className="custom-control-label" htmlFor="save-info">Save this information for next time</label>
        </div>
        <div className="mb-4">

        <h4 className="mb-3">Payment</h4>

        <div className="d-block my-3">
          <div className="custom-control custom-radio">
            <input id="credit" name="paymentMethod" type="radio" className="custom-control-input" checked required/>
            <label className="custom-control-label" htmlFor="credit">Credit card</label>
          </div>
          <div className="custom-control custom-radio">
            <input id="debit" name="paymentMethod" type="radio" className="custom-control-input" required/>
            <label className="custom-control-label" htmlFor="debit">Debit card</label>
          </div>
          <div className="custom-control custom-radio">
            <input id="paypal" name="paymentMethod" type="radio" className="custom-control-input" required/>
            <label className="custom-control-label" htmlFor="paypal">PayPal</label>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="cc-name">Name on card</label>
            <input type="text" className="form-control" id="cc-name" placeholder="" required/>
            <small className="text-muted">Full name as displayed on card</small>
            <div className="invalid-feedback">
              Name on card is required
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="cc-number">Credit card number</label>
            <input type="text" className="form-control" id="cc-number" placeholder="" required/>
            <div className="invalid-feedback">
              Credit card number is required
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 mb-3">
            <label htmlFor="cc-expiration">Expiration</label>
            <input type="text" className="form-control" id="cc-expiration" placeholder="" required/>
            <div className="invalid-feedback">
              Expiration date required
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <label htmlFor="cc-cvv">CVV</label>
            <input type="text" className="form-control" id="cc-cvv" placeholder="" required/>
            <div className="invalid-feedback">
              Security code required
            </div>
          </div>
        </div>
        <div className="mb-4">
        <button className="btn btn-primary btn-lg btn-block" type="submit">Continue to checkout</button>
        </div>
        </div>
        </div>
      </form>
    </div>
  </div>
  <footer className="my-5 pt-5 text-muted text-center text-small">
    <p className="mb-1">&copy; 2017-2020 Company Name</p>
    <ul className="list-inline">
      <li className="list-inline-item"><a href="#">Privacy</a></li>
      <li className="list-inline-item"><a href="#">Terms</a></li>
      <li className="list-inline-item"><a href="#">Support</a></li>
    </ul>
  </footer>
  </div>



  )
}*/



/*export const CheckOut = () => {
  return (
    <div className="checkout-container">
      <div className="row">
        <div className="col-md-4 order-md-2 mb-4">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-muted">Your Order</span>
            <span className="badge badge-secondary badge-pill">3</span>
            </h4>
          <ul className="list-group mb-3">
            <li className="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                <h6 className="my-0">Product name</h6>
                <small className="text-muted">Brief description</small>
              </div>
              <span className="text-muted">$12</span>
            </li>
            <li className="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                <h6 className="my-0">Second product</h6>
                <small className="text-muted">Brief description</small>
              </div>
              <span className="text-muted">$8</span>
            </li>
            <li className="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                <h6 className="my-0">Third item</h6>
                <small className="text-muted">Brief description</small>
              </div>
              <span className="text-muted">$5</span>
            </li>
            <li className="list-group-item d-flex justify-content-between bg-light">
              <div className="text-success">
                <h6 className="my-0">Promo code</h6>
                <small>EXAMPLE CODE</small>
              </div>
              <span className="text-success">-$5</span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <span>Total (USD)</span>
              <strong>$20</strong>
            </li>
          </ul>
          <form className="card p-2">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Promo code" />
              <div className="input-group-append">
                <button type="submit" className="btn btn-secondary">Redeem</button>
              </div>
            </div>
          </form>
        </div>
        
        <div className="col-md-6 col-sm-12 col-xs-12">
          <div className="contact-form">
            <div className='checkout-title' />
            <h3 className='text-start'>Billing Address</h3>
            <form className="row g-3">
              <div className="col-md-6">
                <label htmlFor="inputEmail4" className="form-label"></label>
                <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputPassword4" className="form-label"></label>
                <input type="password" className="form-control" id="inputPassword4" placeholder="Password" />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputPhoneNumber" className="form-label"></label>
                <input type="text" className="form-control" id="inputPhoneNumber" placeholder="Phone Number" />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputSubject" className="form-label"></label>
                <input type="text" className="form-control" id="inputSubject" placeholder="Subject" />
              </div>
              <div className="col-mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label"></label>
                <textarea className="form-control" cols={30} rows={7} id="exampleFormControlTextarea1" placeholder="Message"></textarea>
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-primary">Submit Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

  )
}*/



export const CheckOut = () => {
  return (
    <div className="checkout-container">
      <div className="row">
        <div className="col-md-4 order-md-2 mb-4">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-muted">Your Order</span>
            <span className="badge badge-secondary badge-pill">3</span>
          </h4>
          <ul className="list-group mb-3">
            <li className="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                <h6 className="my-0">Product name</h6>
                <small className="text-muted">Brief description</small>
              </div>
              <span className="text-muted">$12</span>
            </li>
            <li className="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                <h6 className="my-0">Second product</h6>
                <small className="text-muted">Brief description</small>
              </div>
              <span className="text-muted">$8</span>
            </li>
            <li className="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                <h6 className="my-0">Third item</h6>
                <small className="text-muted">Brief description</small>
              </div>
              <span className="text-muted">$5</span>
            </li>
            <li className="list-group-item d-flex justify-content-between bg-light">
              <div className="text-success">
                <h6 className="my-0">Promo code</h6>
                <small>EXAMPLE CODE</small>
              </div>
              <span className="text-success">-$5</span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <span>Total (USD)</span>
              <strong>$20</strong>
            </li>
          </ul>
          <form className="card p-2">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Promo code" />
              <div className="input-group-append">
                <button type="submit" className="btn btn-secondary">Redeem</button>
              </div>
            </div>
          </form>
        </div>
        <div className="col-md-6 col-sm-12 col-xs-12">
          <div className="contact-form">
            <div className='checkout-title' />
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
                  <input className="form-check-input" type="checkbox" id="gridCheck" />
                  <label className="form-check-label" htmlFor="gridCheck">
                  Credit Cards / Debit Cards
                  </label>
                  <div className="col-md-6">
                <label htmlFor="inputPhoneNumber" className="form-label">Phone Number</label>
                <input type="text" className="form-control" id="inputPhoneNumber" />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputCode" className="form-label">Delivery Code</label>
                <input type="text" className="form-control" id="inputCode" />
              </div>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="gridCheck" />
                  <label className="form-check-label" htmlFor="gridCheck">
                  Cash On Delivery
                  </label>
                </div>
              </div>
            </form>
            </div>
          </div>
        </div>
        </div>

      
  )
}



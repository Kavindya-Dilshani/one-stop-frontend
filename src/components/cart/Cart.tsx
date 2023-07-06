
import cheese from '../../../../assets/images/cheese.png';
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useCart } from '../../utilities/cart/CartContext';
import { useEffect, useState } from 'react';
import { CartItem } from '../../shared/models/CartModels';




/*export const Cart = () => {
  return (
    <section className="shopping-cart">
  <div className="shopping-cart-container py-5">
    <div className="row d-flex justify-content-center align-items-center">
      <div className="col">
        <div className="card">
          <div className="card-body p-4">

            <div className="row">

              <div className="col-lg-7">
                <h5 className="mb-3">
                  <a href="#!" className="text-body">
                    <i className="fas fa-long-arrow-alt-left me-2"></i>Continue shopping</a></h5>
                </div>

                <div className="d-flex justify-content-between align-items-center mb-4">
                  <div>
                    <p className="mb-1">Shopping cart</p>
                    <p className="mb-0">You have 4 items in your cart</p>
                  </div>
                </div>

                <div className="card mb-3">
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <div className="d-flex flex-row align-items-center">
                        <div>
                          <img src={cheese} className="img-fluid" alt="m"/>
                        </div>
                        <div className="ms-3">
                          <h5>Iphone 11 pro</h5>
                          <p className="small mb-0">256GB, Navy Blue</p>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center">
                        <div>
                          <h5 className="fw-normal mb-0">2</h5>
                        </div>
                        <div >
                          <h5 className="mb-0">$900</h5>
                        </div>
                        <a href="#!"><i className="fas fa-trash-alt"></i></a>
                      </div>
                    </div>
                  </div>
                </div>

                

                

              </div>
              <div className="col-lg-5">

                <div className="card bg-primary text-white rounded-3">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <h5 className="mb-0">Card details</h5>
                    </div>

                    <p className="small mb-2">Card type</p>
                    <a href="#!" type="submit" className="text-white"><i
                        className="fab fa-cc-mastercard fa-2x me-2"></i></a>
                    <a href="#!" type="submit" className="text-white"><i
                        className="fab fa-cc-visa fa-2x me-2"></i></a>
                    <a href="#!" type="submit" className="text-white"><i
                        className="fab fa-cc-amex fa-2x me-2"></i></a>
                    <a href="#!" type="submit" className="text-white"><i className="fab fa-cc-paypal fa-2x"></i></a>

                    <form className="mt-4">
                      <div className="form-outline form-white mb-4">
                        <input type="text" id="typeName" className="form-control form-control-lg" 
                          placeholder="Cardholder's Name" />
                        <label className="form-label" htmlFor="typeName">Cardholder's Name</label>
                      </div>

                      <div className="form-outline form-white mb-4">
                        <input type="text" id="typeText" className="form-control form-control-lg" 
                          placeholder="1234 5678 9012 3457"   />
                        <label className="form-label" htmlFor="typeText">Card Number</label>
                      </div>

                      <div className="row mb-4">
                        <div className="col-md-6">
                          <div className="form-outline form-white">
                            <input type="text" id="typeExp" className="form-control form-control-lg"
                              placeholder="MM/YYYY"    />
                            <label className="form-label" htmlFor="typeExp">Expiration</label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-outline form-white">
                            <input type="password" id="typeText" className="form-control form-control-lg"
                              placeholder="&#9679;&#9679;&#9679;"  />
                            <label className="form-label" htmlFor="typeText">Cvv</label>
                          </div>
                        </div>
                      </div>

                    </form>

                    <div className="my-4">

                    <div className="d-flex justify-content-between">
                      <p className="mb-2">Subtotal</p>
                      <p className="mb-2">$4798.00</p>
                    </div>

                    <div className="d-flex justify-content-between">
                      <p className="mb-2">Shipping</p>
                      <p className="mb-2">$20.00</p>
                    </div>

                    <div className="d-flex justify-content-between mb-4">
                      <p className="mb-2">Total(Incl. taxes)</p>
                      <p className="mb-2">$4818.00</p>
                    </div>

                    <button type="button" className="btn btn-info btn-block btn-lg">
                      <div className="d-flex justify-content-between">
                        <span>$4818.00</span>
                        <span>Checkout <i className="fas fa-long-arrow-alt-right ms-2"></i></span>
                      </div>
                    </button>

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

  )
}*/
/*export const Cart = () => {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-10 col-11 mx-auto'>
          <div className='row mt-5 gx-3'>
            <div className='col-md-12 col-lg-8 col-11 mx-auto main-cart mb-lg-0 mb-5'>
              <div className='card p-4'>
                <h2 className='py-4 font-weight-bold'>Cart 2 items</h2>
                <div className='row'>
                  <div className='col-md-5 col-11 mx-auto bg-light d-flex
              justify-content-center align-items-center shadow product-img'>
                    <img src={cheese} className='img-fluid' alt='' />
                  </div>
                  <div className='col-md-7 col-11 mx-auto px-4 mt-2'>
                    <div className='row'>
                      <div className='col-6 card-title'>
                        <h1 className='mb-4 product-name'>Cheese</h1>
                        <p className='mb-2'>Brand:Prima</p>
                        <p className='mb-2'>Order Id:C001</p>
                      </div>
                      <div className='col-6'>
                        <ul className="pagination justify-content-end set-quantity">
                          <li className="page-item">
                          <button className="page-link "><i className='fas-fa-minus'></i><FaMinus/></button>
                          </li>
                          <li className="page-item"><input type='text' name='' className="page-link" value={1} id='text-box'/>
                          </li>
                          <li className="page-item">
                          <button className="page-link"><i className='fas-fa-minus'></i><FaPlus/></button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  )
}*/









export const Cart = () => {

  const { getTotalPrice, getAllItems, addItem, removeItem } = useCart();

  useEffect(() => {
    addItem({ itemId: '1', itemName: 'shop', itemPrice: '5000' })
  }, [])

  return (
    <section className="h-100 gradient-custom">
      {
        getAllItems().map(item => {
          return <p>{item.itemName}</p>
        })
      }
      <div className="container py-5">
        <div className="row d-flex justify-content-center my-4">
          <div className="col-md-8">
            <div className="card mb-4">
              <div className="card-header py-3">
                <h5 className="mb-0">Cart - 2 items</h5>
              </div>
              <div className="card-body">

                <div className="row">
                  <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">

                    <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                      {/* <img src={cheese}
                        className="w-100" alt="Blue Jeans Jacket" /> */}
                      {/* <a href="#!">
                        <div className="mask">

                        </div>
                      </a> */}
                    </div>

                  </div>

                  <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">

                    <p><strong>Blue denim shirt</strong></p>
                    <p>Color: blue</p>
                    <p>Size: M</p>
                    <button type="button" className="btn btn-primary btn-sm me-1 mb-2" data-mdb-toggle="tooltip"
                      title="Remove item">
                      <i className="fas fa-trash"></i>
                    </button>
                    <button type="button" className="btn btn-danger btn-sm mb-2" data-mdb-toggle="tooltip"
                      title="Move to the wish list">
                      <i className="fas fa-heart"></i>
                    </button>

                  </div>

                  <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">

                    <div className="d-flex mb-4">
                      <button className="btn btn-primary px-3 me-2">
                        <i className="fas fa-minus"></i>
                      </button>

                      <div className="form-outline">
                        {/* <input id="form1" min="0" name="quantity" value="1" type="number" className="form-control" /> */}
                        <label className="form-label" htmlFor="form1">Quantity</label>
                      </div>

                      <button className="btn btn-primary px-3 ms-2">
                        <i className="fas fa-plus"></i>
                      </button>
                    </div>



                    <p className="text-start text-md-center">
                      <strong>$17.99</strong>
                    </p>

                  </div>
                </div>


                <div className="my-4" />



              </div>

            </div>
            <div className="col-md-4">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">Summary</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li
                      className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      Products
                      <span>$53.98</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                      Shipping
                      <span>Gratis</span>
                    </li>
                    <li
                      className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>Total amount</strong>
                        <strong>
                          <p className="mb-0">(including VAT)</p>
                        </strong>
                      </div>
                      <span><strong>$53.98</strong></span>
                    </li>
                  </ul>

                  <Link to={'/checkout'}><button type="button" className="btn btn-primary btn-lg btn-block">
                    Go to checkout
                  </button></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

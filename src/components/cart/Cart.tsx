
import cheese from '../../../../assets/images/cheese.png';
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useCart } from '../../utilities/cart/CartContext';
import { useEffect, useState } from 'react';
import { CartItem } from '../../shared/models/CartModels';



export const Cart = () => {

  const { getTotalPrice, getAllItems, addItem, removeItem } = useCart();

  useEffect(() => {
    addItem({ itemId: '1', itemName: 'shop', itemPrice: '5000' })
  }, [])

  /*useEffect(() => {
    removeItem({ itemId: '1' });
   },  [])

   useEffect(() => {
    getTotalPrice({ itemId: '1',itemPrice: '5000' })
  }, [])*/



  return (
    <section className="h-100 Cart-section">
      {
        getAllItems().map(item => {
          return <p>{item.itemName}</p>
        })
      }
      <div className="cart-container py-5">
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
                    </div>
                  </div>

                  <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                    <button type="button" className="btn btn-primary btn-sm me-1 mb-2" data-mdb-toggle="tooltip"
                      title="Remove item">
                      <i className="fas fa-trash"><FaTrash /></i>
                    </button>
                  </div>
                  <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                    <div className="d-flex mb-4">
                      <button className="btn btn-primary px-3 me-2">
                        <i className="fas fa-minus"><FaMinus /></i>
                      </button>
                      <div className="form-outline">
                        <label className="form-label" htmlFor="form1">Quantity</label>
                      </div>
                      <button className="btn btn-primary px-3 ms-2">
                        <i className="fas fa-plus"><FaPlus /></i>
                      </button>
                    </div>
                    <p className="text-start text-md-center">
                      <strong>$17.99</strong>
                    </p>
                  </div>
                </div>
                <div className="my-4" />
                <div className="pt-5">
                  <h6 className="mb-0"><a href="#!" className="text-body"><i
                    className="fas fa-long-arrow-alt-left me-2"></i>Back to shop</a></h6>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">Order Summary</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li
                      className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      Items
                      <span>$53.98</span>
                    </li>
                    <div className="col-md-12">
                      <label htmlFor="formGroupExampleInput" className="form-label">Do you have Any Discount Code?</label>
                      <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter Your Code" />
                      <button className="btn btn-primary">Apply</button>
                    </div>
                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                      Delivery Charges
                      <span>-</span>
                    </li>
                    <li
                      className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>Total Price</strong>
                      </div>
                      <span><strong>$53.98</strong></span>
                    </li>
                  </ul>
                  <Link to={'/checkout'}><button type="button" className="btn btn-primary btn-lg btn-block">
                    Checkout
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





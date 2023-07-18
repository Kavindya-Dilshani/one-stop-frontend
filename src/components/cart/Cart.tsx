import './Cart.css';
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useCart } from '../../utilities/cart/CartContext';



export const Cart = () => {
  const { getTotalPrice, getAllItems, addItem, removeItem, deleteItem } = useCart();

  return (
    <section className="h-100 Cart-section">
      <div className="cart-container py-5">
        <div className="row d-flex justify-content-center my-4">
          <div className="col-md-6">
            <div className="card mb-4">
              <div className="card-header py-3">
                <h5 className="mb-0">Total items in the Cart: {getAllItems().length}</h5>
              </div>
              <div className="card-body">
                {getAllItems().length > 0 &&
                  getAllItems().map(item => {
                    return (
                      <div className="row" key={item.itemId}>
                        <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                          <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                            <img src={item.imageSource} alt="" />
                            <div className="my-4" />
                            <a href="#!">
                              
                            </a>
                          </div>
                        </div>
                        <div className="col-lg-5 col-md-6 mb-4 mb-lg-2">
                          <p><strong>Name:</strong> {item.itemName}</p>
                          <p><strong>Quantity:</strong>{item.quantity}</p>
                          <button type="button" className="btn btn-primary btn-sm me-1 mb-2" data-mdb-toggle="tooltip"
                            title="Remove item">
                            <i className="fas fa-trash" onClick={() => deleteItem(item.itemId)}><FaTrash /></i>
                          </button>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                          <div className="d-flex mb-4" >
                            <button className="btn btn-primary px-3 me-2" disabled={item.quantity <= 1}>
                              <i className="fas fa-minus" onClick={() => removeItem(item.itemId)}><FaMinus /></i>
                            </button>
                            <div className="form-outline">
                              <label className="form-label" htmlFor="form1"> x{item.quantity} </label>
                            </div>
                            <button className="btn btn-primary px-3 ms-2">
                              <i className="fas fa-plus" onClick={() => addItem(item)}><FaPlus /></i>
                            </button>
                          </div>
                          <p className="text-start text-md-center">
                            <strong>{item.totalPrice}</strong>
                          </p>
                        </div>
                      </div>
                    )
                  })
                }
               
                <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                </div>
              </div>
            </div>
            <div className="card mb-4 mb-lg-0">
              <div className="bank-body">
                <p><strong>We Accept</strong></p>
                <img className="me-2" width="45px"
                  src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                  alt="Visa" />
                <img className="me-2" width="45px"
                  src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                  alt="American Express" />
                <img className="me-2" width="45px"
                  src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                  alt="Mastercard" />
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card mb-4">
              <div className="card-header py-3">
                <h5 className="mb-0">Order Summary</h5>
              </div>
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li
                    className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                    Total Items
                    <span>{getAllItems().length}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                    Delivery Charges
                    <span>free</span>
                  </li>
                  <li
                    className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                    <div>
                      <strong>Total Price</strong>
                    </div>
                    <span><strong>Rs: {getTotalPrice()}</strong></span>
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
    </section>
  )
}






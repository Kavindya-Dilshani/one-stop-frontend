
import cheese from '../../../../assets/images/cheese.png';
import { FaMinus } from "react-icons/fa";
import { FaPlus} from "react-icons/fa";
import { FaTrash} from "react-icons/fa";




export const Cart = () => {
  return (

<div className="container padding-bottom-3x mb-1">
    <div className="table-responsive shopping-cart">
        <table className="table">
            <thead>
                <tr>
                    <th>My Cart</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <div className="product-item">
                            <a className="product-thumb" href="#">
                              <img src={cheese} alt="Product"/>
                              </a>
                            <div className="product-info">
                                <h4 className="product-title">
                                <a href="#">Cheese</a>
                                </h4><span><em>Brand:</em> Prima</span><span><em>OrderID:</em> C001</span>
                            </div>
                        </div>
                    </td>
                    <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                      <button className="btn btn-link px-2">
                        <i className="fa fa-minus"><FaMinus/></i>
                      </button>
                      <button className="btn btn-link px-2" >
                        <i className="fas fa-plus"><FaPlus/></i>
                      </button>
                    </div>
                    <td className="text-center text-lg text-medium">$43.90</td>
                    <td className="text-center text-lg text-medium">$18.00</td>
                    <td className="text-center">
                    <a className="remove-from-cart" href="#" data-toggle="tooltip" title="" data-original-title="Remove item">
                    <i className="fa fa-trash"></i><FaTrash/></a>
                    </td>
                </tr>
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

            <button type="button" className="btn btn-primary btn-lg btn-block">
              Go to checkout
            </button>
          </div>
        </div>
        </div>

                
    <div className="shopping-cart-footer">
        <div className="column"><a className="btn btn-outline-secondary" href="#">
      <i className="icon-arrow-left"></i>&nbsp;Back to Shopping</a></div>
        
</div>
</tbody>
</table>
</div>
</div>
  )
}


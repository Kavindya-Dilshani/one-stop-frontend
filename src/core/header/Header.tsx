import './Header.css';
import logo from '../../assets/icons/logo.png';
import { FaUserAlt } from "react-icons/fa";
import { FaSistrix } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <>
            <nav className="header navbar navbar-expand-lg  navigation-wrap">
                <div className="container">
                    <Link className="navbar-brand" to="/home" >
                        <img className="navbar-brand" src={logo}/> 
                        <h3>One Stop</h3>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <ul className="navbar-nav ">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    All Categories
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="#">Fruits</Link></li>
                                    <li><Link className="dropdown-item" to="#">Vegetables</Link></li>
                                    <li><Link className="dropdown-item" to="#">Bakery</Link></li>
                                    <li><Link className="dropdown-item" to="#">Meat & Fish</Link></li>
                                    <li><Link className="dropdown-item" to="#">Flour</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/shop">Shop</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                            <div className='icons' />
                            <li><Link to='#'><i className='fa fa-search'></i><FaSistrix /> </Link></li>
                            <li><Link to='/login'><i className='fa fa-user'></i><FaUserAlt /></Link></li>
                            <li><Link to='#'><i className='fa fa-shopping-cart'></i><FaShoppingCart /> </Link></li>
                        </ul>
                    </div>
                    <div className='search'>
                    </div>
                </div>
            </nav>
        </>
    );
}
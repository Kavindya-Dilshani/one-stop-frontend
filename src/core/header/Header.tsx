import './Header.css';
import logo from '../../assets/icons/logo.png';
import { FaUserAlt } from "react-icons/fa";
import { FaSistrix } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

export const Header = () => {
    return (
        <>
            <nav className="header navbar navbar-expand-lg  navigation-wrap">
                <div className="container">
                    <a className="navbar-brand" href="#" />
                    <img className="navbar-brand" src={logo} />
                    <h3>One Stop</h3>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <ul className="navbar-nav ">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    All Categories
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Fruits</a></li>
                                    <li><a className="dropdown-item" href="#">Vegetables</a></li>
                                    <li><a className="dropdown-item" href="#">Bakery</a></li>
                                    <li><a className="dropdown-item" href="#">Meat & Fish</a></li>
                                    <li><a className="dropdown-item" href="#">Flour</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#shop">Shop</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#about">About us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact">Contact</a>
                            </li>
                            <div className='icons' />
                            <li><a href='#'><i className='fa fa-search'></i><FaSistrix /> </a></li>
                            <li><a href='#'><i className='fa fa-user'></i><FaUserAlt /> </a></li>
                            <li><a href='#'><i className='fa fa-shopping-cart'></i><FaShoppingCart /> </a></li>
                        </ul>
                    </div>
                    <div className='search'>
                    </div>
                </div>
            </nav>
        </>
    );
}
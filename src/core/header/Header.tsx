import './Header.css';
import logo from '../../assets/icons/logo.svg'

export const Header = () => {
    return (
        <>
            <nav className="header navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <img className="navbar-brand" src={logo} />Logo
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Products</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Categories</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Review</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    );
}

import './Login.css'
import groceryproduct from '../../assets/images/groceryproduct.webp';
import { Link } from 'react-router-dom';



export const Login = () => {
    return (

        <div className="login-area pb-5 pt-5">
            <div className="login-area-container">
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-sm-12 col-xs-12">
                        <div className="Signup-form">
                            <div className='login-title' />
                            <h3 className='text-start fs-3'>Sign In</h3>

                            <form className='needs-validation'>
                                <div className="row mb-3 py-3">
                                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                                    <div className="col-sm-8">
                                        <input type="email" className="form-control" id="inputEmail3" />
                                    </div>
                                </div>
                                <div className="row mb-3 py-3 was-validated">
                                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                                    <div className="col-sm-8">
                                        <input type="password" className="form-control" id="inputPassword3" required />
                                        <div className='invalid-feedback'>
                                            Password must be 8 characters
                                        </div>
                                    </div>
                                    <div className="form-check mb-0 py-3">
                                        <input className="form-check-input me-2 mx-2" type="checkbox" value="" id="form2Example3" />
                                        <label className="form-check-label" htmlFor="form2Example3">
                                            Remember me
                                        </label>
                                    </div>
                                    <div className="col-12">
                                        <button type="submit" className="btn btn-primary">Login</button>
                                        <p className=" mt-4 pt-1 mb-0 ">Don't have an account?
                                            <Link to='/signup'><a className="link-danger mx-2">Register</a></Link></p>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div><div className="col-md-6 col-sm-12 col-xs-12">
                        <div className="image-area">
                            <h2>Welcome to<br /> One Stop Grocery Store</h2>
                            <img src={groceryproduct} className="img-fluid" alt="Sample image" />
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
    }
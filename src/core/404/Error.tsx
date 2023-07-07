import { Link } from 'react-router-dom';
import './Error.css';

export const Error = () => {
  return (
    <section className="page-404">
        <div className="page-container">
            <div className="row">
                <div className="col-sm-12">
                    <div className="col-sm-10 col-sm-offset-1 text-center">
                        <div className="four-zero-four-bg">
                            <h1 className="text-center">404</h1>
                        </div>
                        <div className="content-box-404">
                            <h3 className="h2">Looks Like you're lost</h3>
                            <p>The page you are looking for not available</p>
                            <Link to={'./home'}>Go To Home</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

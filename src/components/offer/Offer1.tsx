import { Button } from 'react-bootstrap';
import './Offer1.css';


export const Offer1 = () => {
    return (
        <section id="Offer1">
            <div className="Offer1-section">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="text-content-end">
                                <h1>Weekend Offer</h1>
                                <p className='fs-2'>Get 50% off
                                    On Organic fruits
                                </p>
                                <p className="fs-5">Only this weekend, So don't miss</p>
                                <p className="fs-3"> From $10.00</p>
                                <Button variant="primary">Shop now</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

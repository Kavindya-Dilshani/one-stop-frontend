import './ContactUs.css';

export const ContactUs = () => {
    return (
        <div className="contact-area pb-5 pt-5">
            <div className="contact-area-container">
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-sm-12 col-xs-12">
                        <div className="contact-form">
                            <div className='section-title' />
                            <h3 className='text-start'>Send us a message</h3>
                            <p className='text-start'>If you have any question</p>
                            <form className="row g-3">
                                <div className="col-md-6">
                                    <label htmlFor="inputEmail4" className="form-label"></label>
                                    <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputPassword4" className="form-label"></label>
                                    <input type="password" className="form-control" id="inputPassword4" placeholder="Password" />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputPhoneNumber" className="form-label"></label>
                                    <input type="text" className="form-control" id="inputPhoneNumber" placeholder="Phone Number" />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputSubject" className="form-label"></label>
                                    <input type="text" className="form-control" id="inputSubject" placeholder="Subject" />
                                </div>
                                <div className="col-mb-3">
                                    <label htmlFor="exampleFormControlTextarea1" className="form-label"></label>
                                    <textarea className="form-control" cols={30} rows={7} id="exampleFormControlTextarea1" placeholder="Message"></textarea>
                                </div>
                                <div className="col-12">
                                    <button type="submit" className="btn btn-primary">Submit Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 col-xs-12">
                        <div className="map-area">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.9501575356003!2d79.84988027535258!3d6.896565275318122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25bdfa70ff607%3A0xe0eb92c654a0d831!2s471%20Galle%20Rd%2C%20Colombo%2000300!5e0!3m2!1sen!2slk!4v1688126358623!5m2!1sen!2slk"
                                loading="lazy"></iframe>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}





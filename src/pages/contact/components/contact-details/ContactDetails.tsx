import { ContactInfoConfig } from '../../../../utilities/config/ContactInfoConfig';
import './ContactDetails.css';




/*export const ContactDetails = () => {
    return (
        <section className='information' id='information'>
            <div className='heading text-center'>
                <div className='information-container'>
                    <div className='card'>
                        <div className='i-box text-center'>
                            <img src={map} className="img-fluid" alt=""></img>
                            <h3>Office Address</h3>
                            <p className='py-2'>18/A, New Born Town Hall New York, US</p>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='i-box'>
                            <img src={map} className="img-fluid" alt=""></img>
                            <h3>Phone Number</h3>
                            <p className='py-2'>18/A, New Born Town Hall New York, US</p>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='i-box'>
                            <img src={gmail} className="img-fluid" alt=""></img>
                            <h3>Email Address</h3>
                            <p className='py-2'>info@webmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}*/



export const ContactDetails = () => {
    const contact = ContactInfoConfig.ContactInfoData;
  return (
    <>
            <section className='information' id='information'>
                <div className='information-container'>
                    <div className='row'>
                        <div className='i-box'>
                            <div className='row row-cols-1 row-cols-md-3 g-4'>
                                {contact && contact.map((_contact, index) => {
                                    return (
                                        <div className='col' key={index}>
                                            <div className='card h-100'>
                                                <div className='info-image p-6  text-center'>
                                                    <a className='link-card-info' href='#'>
                                                        <img src={_contact.image} className="img-fluid" />
                                                    </a>
                                                        <div className='info-title'>
                                                            <h3 className='fs-5'>{_contact.title}</h3>
                                                            <div className='info-detail'>
                                                                <p className='fs-6'>{_contact.detail}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                    );
                                })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

  )
}


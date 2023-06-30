import { Banner } from "../home/components/banner/Banner";
import { ContactDetails } from "./components/contact-details/ContactDetails"
import {ContactUs}  from "./components/contact-us/ContactUs";



export const Contact = () => {
  return (
    <>
    <div>
        <ContactDetails/>
        <ContactUs/>
        <Banner/>
    </div>
    </>
  )
}

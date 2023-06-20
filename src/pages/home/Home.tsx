import {Cards} from '../../components/card/Card';
import {Carousel} from '../../components/Carousel';
import { Category } from '../../components/Category';
import { Offer } from '../../components/offer/Offer';
import { Card1 } from '../../components/card/Card1';
import { Offer1 } from '../../components/offer/Offer1';
import { Carousel1 } from '../../components/carousel/Carousel1';
import { Testimonial } from '../../components/testimonial/Testimonial';
import { Banner } from '../../components/banner/Banner';
import { Offer2 } from '../../components/offer/Offer2';

export const Home = () => {
    return (
        <>
            <div>
                <Carousel />
                <h2 className='py-5 fs-1 text-center'> Our Products</h2>
                <Category />
                <h3 className='py-5 fs-1  text-center'> Best Sellers</h3>
                <Cards/>
                <h3 className='py-4 '></h3>
                <Offer2/>
                <Offer/>
                <Card1/>
                <Offer1/>
                <h4 className='py-5 text-center'> Top Deals Discount</h4>
                <Carousel1/>
                <h2 className='py-5 text-center'> Customer Review</h2>
                <Testimonial/>
                <Banner/>
                </div>

                
    
            
        </>
    )
}

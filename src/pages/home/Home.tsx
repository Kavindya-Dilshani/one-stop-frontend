import { Cards } from '../../components/card/Card';
import Carousel from '../../components/Carousel';
import { Category } from '../../components/Category';
import { Offer } from '../../components/offer/Offer';
import { Card1 } from '../../components/card/Card1';
import { Offer1 } from '../../components/offer/Offer1';

export const Home = () => {
    return (
        <>
            <div>
                <Carousel />
                <h2 className='py-5 text-center'> Our Products</h2>
                <Category />
                <h3 className='py-5 text-center'> Best Products</h3>
                <Cards/>
                <Offer/>
                <h4 className='py-5 text-center'> Top Deals Discount</h4>
                <Card1/>
                <Offer1/>
                </div>

                
    
            
        </>
    )
}

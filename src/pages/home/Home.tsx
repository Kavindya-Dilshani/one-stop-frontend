import { Carousel } from './components/carousel/Carousel';
import { Category } from './components/category/Category';
import { OfferFruitBanner } from './components/offer-fruit-banner/OfferFruitBanner';
import { Banner } from './components/banner/Banner';
import { OfferFishBanner } from './components/offer-fish-banner/OfferFishBanner';
import { Testimonial } from './components/testimonial/Testimonial';
import { CardTileList } from './components/card-tiles-list/CardTileList';
import { CardListList } from './components/card-list-list/CardListList';
import { CardDiscount } from "./components/card-discount/CardDiscount";
import './Home.css';


export const Home = () => {
    return (
        <>
            <div>
                <Carousel />
                <h2 className='py-5 fs-1 text-center'> Our Products</h2>
                <Category />
                <h3 className='py-5 fs-1  text-center'> Best Sellers</h3>
                <CardTileList />
                <h3 className='py-4 '></h3>
                <OfferFishBanner />
                <h4 className='py-5 text-center fs-1'> Top Deals Discount</h4>
                <CardListList />
                <h3 className='py-5 '></h3>
                <OfferFruitBanner />
                <h4 className='py-5 text-center fs-1'> Recently Landed</h4>
                <CardDiscount />
                <h2 className='py-5 text-center fs-1'> Our Client Say</h2>
                <Testimonial />
                <Banner />
            </div>
        </>
    )
}

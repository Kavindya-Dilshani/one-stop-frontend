import {ShopCard} from '../../pages/shop/components/shop-card/ShopCard';
import { Banner } from '../home/components/banner/Banner';

export const Shop = () => {
  return (
    <>
        <div>
            <ShopCard />
            <h3 className='py-4'></h3>
            <Banner/>
            </div>
    </>
)
}
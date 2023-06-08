import Carousel from '../../components/Carousel';
import { Category } from '../../components/Category';
import './Home.css';

export const Home = () => {
    return (
        <div>
            <Carousel />
            <h2 className='py-5 text-center'> Our Products</h2>
            <Category />
        </div>
    )
}

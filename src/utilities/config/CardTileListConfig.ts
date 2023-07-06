import { CardTileDetails } from '../../shared/models/CardTileListModels';
import Product1 from '../../assets/images/Product1.png';
import Product2 from '../../assets/images/Product2.png';
import Product3 from '../../assets/images/Product3.png';
import Product5 from '../../assets/images/Product5.png';
import Product6 from '../../assets/images/Product6.png';
import Product7 from '../../assets/images/Product7.png';
import Product8 from '../../assets/images/Product8.png';
import bread from '../../assets/images/bread.png';




const CardTileData: CardTileDetails[] = [
    { title: 'Apple', image: Product1, price: 'Rs.300',path:'' },
    { title: 'Bread', image: bread, price: 'Rs 150',path:'' },
    { title: 'Cabbage', image: Product7, price: 'Rs 75',path:''},
    { title: 'Grapes', image: Product5, price: 'Rs 550',path:''},
    { title: 'Chicken', image: Product6, price: 'Rs 1500',path:''},
    { title: 'Lemon', image: Product8, price: 'Rs 70',path:''},
    { title: 'Eggs', image: Product3, price: 'Rs 50',path:'' },
    { title: 'Onions', image: Product2, price: 'Rs 180',path:''},

];

const CardDiscountData: CardTileDetails[] = [
    { title: 'Papaya', image: Product1, price: 'Rs 40',path:'' },
    { title: 'Bread', image: bread, price: 'Rs 150',path:'' },
    { title: 'Garlic', image:Product1 , price: 'Rs 68',path:'' },
    { title: 'Avocado', image: Product1, price: 'Rs 95',path:'' },
    { title: 'Noodles', image: Product1, price: 'Rs 250',path:''},
    { title: 'Tea Pouch', image: Product1, price: 'Rs 86',path:'' },

];


export const CardTileListConfig = { CardTileData,CardDiscountData };
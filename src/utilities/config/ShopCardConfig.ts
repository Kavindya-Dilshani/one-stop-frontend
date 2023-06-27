import { ShopCardDetails } from "../../shared/models/ShopCard";
import Product1 from '../../assets/images/Product1.png';
import Product2 from '../../assets/images/Product2.png';
import Product3 from '../../assets/images/Product3.png';
import Product4 from '../../assets/images/Product4.png';
import Product5 from '../../assets/images/Product5.png';
import Product6 from '../../assets/images/Product6.png';
import Product7 from '../../assets/images/Product7.png';
import Product8 from '../../assets/images/Product8.png';



const ShopCardData: ShopCardDetails[] = [
    { title: 'Apple', image: Product1, amount: '' },
    { title: 'Bread', image: Product6, amount: '' },
    { title: 'Cabbage', image: Product3, amount: '' },
    { title: 'Grapes', image: Product4, amount: '' },
    { title: 'Chicken', image: Product5, amount: '' },
    { title: 'Lemon', image: Product2, amount: '' },
    { title: 'Eggs', image: Product7, amount: '' },
    { title: 'Onions', image: Product8, amount: '' },

];


export const ShopCardConfig = { ShopCardData };
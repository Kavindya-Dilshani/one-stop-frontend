import { CardTileDetails } from '../../shared/models/CardTileListModels';
import Product1 from '../../assets/images/Product1.png';
import Product2 from '../../assets/images/Product2.png';
import Product3 from '../../assets/images/Product3.png';
import Product4 from '../../assets/images/Product4.png';
import Product5 from '../../assets/images/Product5.png';
import Product6 from '../../assets/images/Product6.png';
import Product7 from '../../assets/images/Product7.png';
import Product8 from '../../assets/images/Product8.png';
import bread from '../../assets/images/bread.png';




const CardTileData: CardTileDetails[] = [
    { title: 'Apple', image: Product1, price: 'Rs.300' },
    { title: 'Bread', image: bread, price: 'Rs 150' },
    { title: 'Cabbage', image: Product7, price: 'Rs 75' },
    { title: 'Grapes', image: Product5, price: '4' },
    { title: 'Chicken', image: Product6, price: '7' },
    { title: 'Lemon', image: Product8, price: '6' },
    { title: 'Eggs', image: Product3, price: '5' },
    { title: 'Onions', image: Product2, price: '6' },

];


export const CardTileListConfig = { CardTileData };
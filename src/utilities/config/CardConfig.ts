import { CardDetails } from '../../shared/models/CardModels';
import Product1 from '../../assets/images/Product1.png';
import Product2 from '../../assets/images/Product2.png';
import Product3 from '../../assets/images/Product3.png';
import Product4 from '../../assets/images/Product4.png';
import Product5 from '../../assets/images/Product5.png';
import Product6 from '../../assets/images/Product6.png';
import Product7 from '../../assets/images/Product7.png';
import Product8 from '../../assets/images/Product8.png';




const CardTileData: CardDetails[] = [
    { title: 'Apple', image: Product1, path: '' },
    { title: 'Bread', image: Product6, path: '' },
    { title: 'Cabbage', image: Product3, path: '' },
    { title: 'Grapes', image: Product4, path: '' },
    { title: 'Chicken', image: Product5, path: '' },
    { title: 'Lemon', image: Product2, path: '' },
    { title: 'Eggs', image: Product7, path: '' },
    { title: 'Onions', image: Product8, path: '' },

];

const CardListData: CardDetails[] = [
    { title: 'Apple', image: Product2, path: '' },
    { title: 'Chicken', image: Product2, path: '' },
    { title: 'Carrot', image: Product2, path: '' },
    { title: 'Grapes', image: Product2, path: '' },
    { title: 'Beef', image: Product2, path: '' },
    { title: 'Tomato', image: Product2, path: '' },
];

export const CardConfig = { CardTileData, CardListData };
import { CardDetails } from '../../shared/models/CardModels';
import Product1 from '../../assets/images/Product1.jpg';
import Product2 from '../../assets/images/Product2.jpg';
import Product3 from '../../assets/images/Product3.jpg';
import Product4 from '../../assets/images/Product4.jpg';
import Product5 from '../../assets/images/Product5.png';
import Product6 from '../../assets/images/Product6.jpg';



const CardList: CardDetails[] = [
    { title: 'Apple', image: Product1, path: '' },
    { title: 'Chicken', image: Product2, path: ''},
    { title: 'Carrot', image: Product3, path: '' },
    { title: 'Grapes', image: Product4, path: '' },
    { title: 'Beef', image: Product5, path: '' },
    { title: 'Tomato', image: Product6, path: '' },
];

export const CardConfig = { CardList };
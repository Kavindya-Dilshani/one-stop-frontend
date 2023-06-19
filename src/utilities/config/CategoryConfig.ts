import { CategoryDetails } from '../../shared/models/CategoryModels';
import fruit from '../../assets/images/fruit.png'
import flour from '../../assets/images/flour.png'
import Vegetable from '../../assets/images/Vegetable.png'
import Bakery from '../../assets/images/bakery.png'
import meat from '../../assets/images/meat.png'

const categoryList: CategoryDetails[] = [
    { title: 'Fruits', image: fruit, path: '', altValue: '' },
    { title: 'Vegetable', image: Vegetable, path: '', altValue: '' },
    { title: 'Flour', image: flour, path: '', altValue: '' },
    { title: 'Meat & Fish', image: meat, path: '', altValue: '' },
    { title: 'Bakery', image: Bakery, path: '', altValue: '' }
];

export const CategoryConfig = { categoryList };
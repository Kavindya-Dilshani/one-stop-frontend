import { CategoryDetails } from '../../shared/models/CategoryModels';
import fruit from '../../assets/images/fruit.png'
import flour from '../../assets/images/flour.png'
import Vegetable from '../../assets/images/Vegetable.png'
import Bakery from '../../assets/images/bakery.png'
import meat from '../../assets/images/meat.png'

const categoryList: CategoryDetails[] = [
    { title: 'Fruits', image: fruit, path: 'fruits', altValue: '' },
    { title: 'Vegetable', image: Vegetable, path: 'vegetable', altValue: '' },
    { title: 'Flour', image: flour, path: 'flour', altValue: '' },
    { title: 'Meat & Fish', image: meat, path: 'meat&fish', altValue: '' },
    { title: 'Bakery', image: Bakery, path: 'bakery', altValue: '' }
];

export const CategoryConfig = { categoryList };
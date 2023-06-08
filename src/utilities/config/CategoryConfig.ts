import { CategoryDetails } from '../../shared/models/CategoryModels';
import Fruit from '../../assets/images/Fruit.png'
import Flour from '../../assets/images/Flour.png'
import Vegetable from '../../assets/images/Vegetable.png'

const categoryList: CategoryDetails[] = [
    { title: 'Fruits', image: Fruit, path: '', altValue: '' },
    { title: 'Vegetable', image: Vegetable, path: '', altValue: '' },
    { title: 'Flour', image: Flour, path: '', altValue: '' },
    { title: 'Fruits', image: Fruit, path: '', altValue: '' },
    { title: 'Fruits', image: Fruit, path: '', altValue: '' }
];

export const CategoryConfig = { categoryList };
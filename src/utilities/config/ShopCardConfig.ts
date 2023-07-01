import { ShopCardDetails } from "../../shared/models/ShopCard";
import fruits from '../../assets/images/fruits.jpg';
import vegetable from '../../assets/images/vegetables.jpeg';
import bakery from '../../assets/images/bakery.jpg';
import flour from '../../assets/images/flour.jpg';
import meatFish from '../../assets/images/meatFish.jpg';
import diary from '../../assets/images/diary.jpg';






const ShopCardData: ShopCardDetails[] = [
    { title: 'Fruits', image: fruits, amount: '8 items' },
    { title: 'Vegetables', image: vegetable, amount: '8 items' },
    { title: 'Flour', image: flour, amount: '5 items' },
    { title: 'Meat & Fish', image: meatFish, amount: '6 items' },
    { title: 'Bakery', image: bakery, amount: '8 items' },
    { title: 'Diary', image: diary, amount: '8 items' }
];


export const ShopCardConfig = { ShopCardData };
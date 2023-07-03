import { CardListDetails } from '../../shared/models/CardListList';
import Product1 from '../../assets/images/Product1.png';
import Product2 from '../../assets/images/Product2.png';
import pineapple from '../../assets/images/pineapple.png';
import mango from '../../assets/images/mango.png';
import Product5 from '../../assets/images/Product5.png';
import banana from '../../assets/images/banana.png';
import watermelon from '../../assets/images/watermelon.png';
import Product8 from '../../assets/images/Product8.png';
import orange from '../../assets/images/orange.png';
import carrot from '../../assets/images/carrot.png';
import broccoli from '../../assets/images/broccoli.png';
import Product7 from '../../assets/images/Product7.png';
import cucumber from '../../assets/images/cucumber.png';
import beetroot from '../../assets/images/beetroot.png';
import leek from '../../assets/images/leek.png';
import tomato from '../../assets/images/tomato.png';
import riceflour from '../../assets/images/riceflour.png';
import wheatflour from '../../assets/images/wheatflour.png';
import Kurakkanflour from '../../assets/images/KurakkanFlour.png';
import attaflour from '../../assets/images/attaflour.png';
import ulunduflour from '../../assets/images/ulundu.png';
import Product6 from '../../assets/images/Product6.png';
import beef from '../../assets/images/beef.png';
import fish1 from '../../assets/images/fish1.png';
import prawns from '../../assets/images/prawns.png';
import pork from '../../assets/images/pork.png';
import sausage from '../../assets/images/sausage.png';
import bread from '../../assets/images/bread.png';
import buns from '../../assets/images/buns.png';
import donut from '../../assets/images/donut.png';
import cookies from '../../assets/images/cookies.png';
import croissant from '../../assets/images/croissant.png';
import cake from '../../assets/images/cake.png';
import cupcake from '../../assets/images/cupcake.png';
import brownies from '../../assets/images/brownies.png';
import cheese from '../../assets/images/cheese.png';
import Product3 from '../../assets/images/Product3.png';
import milk from '../../assets/images/milk.png';
import yogurt from '../../assets/images/yogurt.png';
import butter from '../../assets/images/butter.png';
import curd from '../../assets/images/curd.png';
import ghee from '../../assets/images/ghee.png';
import milkpowder from '../../assets/images/milkpowder.png';

const CardListData: CardListDetails[] = [
    { title: 'Apple', image: Product2, price: '', discount: '' },
    { title: 'Chicken', image: Product2, price: '', discount: '' },
    { title: 'Carrot', image: Product2, price: '', discount: '' },
    { title: 'Grapes', image: Product2, price: '', discount: '' },
    { title: 'Beef', image: Product2, price: '', discount: '' },
    { title: 'Tomato', image: Product2, price: '', discount: '' },

];

const fruits: CardListDetails[] = [
    { title: 'Mango', image: mango, price: '', discount: '' },
    { title: 'Pineapple', image: pineapple, price: '', discount: '' },
    { title: 'Apple', image: Product1, price: '', discount: '' },
    { title: 'Grapes', image: Product5, price: '', discount: '' },
    { title: 'Banana', image: banana, price: '', discount: '' },
    { title: 'Watermelon', image: watermelon, price: '', discount: '' },
    { title: 'Orange', image: orange, price: '', discount: '' },
    { title: 'Lemon', image: Product8, price: '', discount: '' }

];

const vegetables: CardListDetails[] = [
    { title: 'Carrot', image: carrot, price: '', discount: '' },
    { title: 'Broccoli', image: broccoli, price: '', discount: '' },
    { title: 'Cabbage', image: Product7, price: '', discount: '' },
    { title: 'Tomato', image: tomato, price: '', discount: '' },
    { title: 'Cucumber', image: cucumber, price: '', discount: '' },
    { title: 'Beetroot', image: beetroot, price: '', discount: '' },
    { title: 'Leek', image: leek, price: '', discount: '' },
    { title: 'onion', image: Product2, price: '', discount: '' }

];

const flour: CardListDetails[] = [
    { title: 'Rice Flour', image: riceflour, price: '', discount: '' },
    { title: 'Wheat Flour', image: wheatflour, price: '', discount: '' },
    { title: 'Kurakkan Flour', image: Kurakkanflour, price: '', discount: '' },
    { title: 'Atta Flour', image: attaflour, price: '', discount: '' },
    { title: 'Ulundu Flour', image: ulunduflour, price: '', discount: '' }
    

];
const meat: CardListDetails[] = [
    { title: 'Chicken', image: Product6, price: '', discount: '' },
    { title: 'Beef', image: beef, price: '', discount: '' },
    { title: 'Fish', image: fish1, price: '', discount: '' },
    { title: 'Prawns', image: prawns, price: '', discount: '' },
    { title: 'Pork', image: pork, price: '', discount: '' },
    { title: 'Sausage', image: sausage, price: '', discount: '' }
    

];

const bakery: CardListDetails[] = [
    { title: 'Bread', image: bread, price: '', discount: '' },
    { title: 'Buns', image: buns, price: '', discount: '' },
    { title: 'Donuts', image: donut, price: '', discount: '' },
    { title: 'Croissant', image: croissant, price: '', discount: '' },
    { title: 'Cake', image: cake, price: '', discount: '' },
    { title: 'Cookies', image: cookies, price: '', discount: '' },
    { title: 'Brownies', image: brownies, price: '', discount: '' },
    { title: 'Cupcakes', image: cupcake, price: '', discount: '' }
    

];

const diary: CardListDetails[] = [
    { title: 'Cheese', image: cheese, price: '', discount: '' },
    { title: 'Eggs', image: Product3, price: '', discount: '' },
    { title: 'Milk', image: milk, price: '', discount: '' },
    { title: 'Yogurt', image: yogurt, price: '', discount: '' },
    { title: 'Butter', image: butter, price: '', discount: '' },
    { title: 'Curd', image: curd, price: '', discount: '' },
    { title: 'Ghee', image: ghee, price: '', discount: '' },
    { title: 'Milk Powder', image: milkpowder, price: '', discount: '' }
    

];

export const CardListConfig = { CardListData, fruits, vegetables, flour,meat, bakery, diary};
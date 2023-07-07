import { CardTileDetails } from '../../shared/models/CardTileListModels';
import Product1 from '../../assets/images/Product1.png';
import Product2 from '../../assets/images/Product2.png';
import Product5 from '../../assets/images/Product5.png';
import Product7 from '../../assets/images/Product7.png';
import Product8 from '../../assets/images/Product8.png';
import Strawberry from '../../assets/images/strawberry.png';
import imorich from '../../assets/images/imorich.png';
import wholechicken from '../../assets/images/wholechicken.png';
import jambola from '../../assets/images/jambola.png';
import pumpkin from '../../assets/images/pumpkin.png';
import thalapath from '../../assets/images/thalapath.png';
import pineapple from '../../assets/images/pineapple.png';
import mango from '../../assets/images/mango.png';
import banana from '../../assets/images/banana.png';
import watermelon from '../../assets/images/watermelon.png';
import orange from '../../assets/images/orange.png';
import carrot from '../../assets/images/carrot.png';
import broccoli from '../../assets/images/broccoli.png';
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
    { title: 'Strawberry', image: Strawberry, price: 'Rs 500',path:'' },
    { title: 'Imorich Rocky Road', image: imorich, price: 'Rs 1150',path:'' },
    { title: 'Pre Cut Whole Chicken Skinless', image:wholechicken , price: 'Rs 1650',path:'' },
    { title: 'Jambola', image: jambola, price: 'Rs 380',path:'' },
    { title: 'Pumpkin', image: pumpkin, price: 'Rs 250',path:''},
    { title: 'Thalapath Cubes', image: thalapath, price: 'Rs 6290',path:'' },

];

const fruits: CardTileDetails[] = [
    { title: 'Mango', image: mango,  price: 'Rs 150',path:'cart' },
    { title: 'Pineapple', image: pineapple,  price: 'Rs 150',path:'' },
    { title: 'Apple', image: Product1,  price: 'Rs 300',path:'' },
    { title: 'Grapes', image: Product5,  price: 'Rs 550',path:'' },
    { title: 'Banana', image: banana,  price: 'Rs 250',path:'' },
    { title: 'Watermelon', image: watermelon,  price: 'Rs 250',path:'' },
    { title: 'Orange', image: orange,  price: 'Rs 240',path:'' },
    { title: 'Lemon', image: Product8,  price: 'Rs 70',path:'' }

];

const vegetables: CardTileDetails[] = [
    { title: 'Carrot', image: carrot, price: 'Rs 60',path:'' },
    { title: 'Broccoli', image: broccoli, price: 'Rs 100',path:'' },
    { title: 'Cabbage', image: Product7, price:'Rs 75',path:'' },
    { title: 'Tomato', image: tomato, price: 'Rs 53', path:'' },
    { title: 'Cucumber', image: cucumber, price: 'Rs 68',path:''},
    { title: 'Beetroot', image: beetroot, price: 'Rs 26',path:'' },
    { title: 'Leek', image: leek, price: 'Rs 46', path:'' },
    { title: 'onion', image: Product2, price: 'Rs 180', path:'' }

];

const flour: CardTileDetails[] = [
    { title: 'Rice Flour', image: riceflour, price: 'Rs 250',path:'' },
    { title: 'Wheat Flour', image: wheatflour, price: 'Rs 280', path:'' },
    { title: 'Kurakkan Flour', image: Kurakkanflour, price: 'Rs 190',path:'' },
    { title: 'Atta Flour', image: attaflour, price: 'Rs 275',path:''},
    { title: 'Ulundu Flour', image: ulunduflour, price: 'Rs 186',path:'' }
    

];
const meat: CardTileDetails[] = [
    { title: 'Chicken', image: Product6, price: 'Rs 1500', path:'' },
    { title: 'Beef', image: beef, price: 'Rs 2000', path:''},
    { title: 'Fish', image: fish1, price: 'Rs 550', path:''},
    { title: 'Prawns', image: prawns, price: 'Rs 1300', path:'' },
    { title: 'Pork', image: pork, price: 'Rs 2500',path:''},
    { title: 'Sausage', image: sausage, price: 'Rs 450', path:'' }
    

];

const bakery: CardTileDetails[] = [
    { title: 'Bread', image: bread, price: 'Rs 150', path:''},
    { title: 'Buns', image: buns, price: 'Rs 80', path:''},
    { title: 'Donuts', image: donut, price: 'Rs 120', path:'' },
    { title: 'Croissant', image: croissant, price: 'Rs 180',path:'' },
    { title: 'Cake', image: cake, price: 'Rs 400',path:''},
    { title: 'Cookies', image: cookies, price: 'Rs 50', path:''},
    { title: 'Brownies', image: brownies, price: 'Rs 240',path:'' },
    { title: 'Cupcakes', image: cupcake, price: 'Rs 150', path:'' }
    

];

const diary: CardTileDetails[] = [
    { title: 'Cheese', image: cheese, price: 'Rs 2000', path:'' },
    { title: 'Eggs', image: Product3, price: 'Rs 50', path:'' },
    { title: 'Milk', image: milk, price: 'Rs 1000', path:'' },
    { title: 'Yogurt', image: yogurt, price: 'Rs 80',path:''},
    { title: 'Butter', image: butter, price: 'Rs 1300', path:'' },
    { title: 'Curd', image: curd, price: 'Rs 500',path:''},
    { title: 'Ghee', image: ghee, price: 'Rs 2000',path:'' },
    { title: 'Milk Powder', image: milkpowder, price: 'Rs 800',path:'' }
    

];


export const CardTileListConfig = { CardTileData,CardDiscountData,fruits, vegetables, flour,meat, bakery, diary };
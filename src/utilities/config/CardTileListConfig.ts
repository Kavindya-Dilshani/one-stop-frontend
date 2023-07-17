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
    { id: '1', title: 'Apple', image: Product1, price: '300', path: '' },
    { id: '2', title: 'Bread', image: bread, price: '150', path: '' },
    { id: '3', title: 'Cabbage', image: Product7, price: '75', path: '' },
    { id: '4', title: 'Grapes', image: Product5, price: '550', path: '' },
    { id: '5', title: 'Chicken', image: Product6, price: '1500', path: '' },
    { id: '6', title: 'Lemon', image: Product8, price: '70', path: '' },
    { id: '7', title: 'Eggs', image: Product3, price: '50', path: '' },
    { id: '8', title: 'Onions', image: Product2, price: '180', path: '' },

];

const CardDiscountData: CardTileDetails[] = [
    { id: '9',title: 'Strawberry', image: Strawberry, price: '500', path: '' },
    { id: '10',title: 'Imorich Rocky Road', image: imorich, price: '1150', path: '' },
    { id: '11',title: 'Pre Cut Whole Chicken Skinless', image: wholechicken, price: '1650', path: '' },
    { id: '12',title: 'Jambola', image: jambola, price: '380', path: '' },
    { id: '13',title: 'Pumpkin', image: pumpkin, price: '250', path: '' },
    { id: '14',title: 'Thalapath Cubes', image: thalapath, price: '6290', path: '' },

];

const fruits: CardTileDetails[] = [
    { id: '15',title: 'Mango', image: mango, price: '150', path: 'cart' },
    { id: '16',title: 'Pineapple', image: pineapple, price: '150', path: '' },
    { id: '17',title: 'Apple', image: Product1, price: '300', path: '' },
    { id: '18',title: 'Grapes', image: Product5, price: '550', path: '' },
    { id: '19',title: 'Banana', image: banana, price: '250', path: '' },
    { id: '20',title: 'Watermelon', image: watermelon, price: '250', path: '' },
    { id: '21',title: 'Orange', image: orange, price: '240', path: '' },
    { id: '22',title: 'Lemon', image: Product8, price: '70', path: '' }

];

const vegetables: CardTileDetails[] = [
    { id: '23',title: 'Carrot', image: carrot, price: '60', path: '' },
    { id: '24',title: 'Broccoli', image: broccoli, price: '100', path: '' },
    { id: '25',title: 'Cabbage', image: Product7, price: '75', path: '' },
    { id: '26',title: 'Tomato', image: tomato, price: '53', path: '' },
    { id: '27',title: 'Cucumber', image: cucumber, price: '68', path: '' },
    { id: '28',title: 'Beetroot', image: beetroot, price: '26', path: '' },
    { id: '29',title: 'Leek', image: leek, price: '46', path: '' },
    { id: '30',title: 'onion', image: Product2, price: '180', path: '' }

];

const flour: CardTileDetails[] = [
    { id: '31',title: 'Rice Flour', image: riceflour, price: '250', path: '' },
    { id: '32',title: 'Wheat Flour', image: wheatflour, price: '280', path: '' },
    { id: '33',title: 'Kurakkan Flour', image: Kurakkanflour, price: '190', path: '' },
    { id: '34',title: 'Atta Flour', image: attaflour, price: '275', path: '' },
    { id: '35',title: 'Ulundu Flour', image: ulunduflour, price: '186', path: '' }


];
const meat: CardTileDetails[] = [
    { id: '36',title: 'Chicken', image: Product6, price: '1500', path: '' },
    { id: '37',title: 'Beef', image: beef, price: '2000', path: '' },
    { id: '38',title: 'Fish', image: fish1, price: '550', path: '' },
    { id: '39',title: 'Prawns', image: prawns, price: '1300', path: '' },
    { id: '40',title: 'Pork', image: pork, price: '2500', path: '' },
    { id: '41',title: 'Sausage', image: sausage, price: '450', path: '' }


];

const bakery: CardTileDetails[] = [
    { id: '42',title: 'Bread', image: bread, price: '150', path: '' },
    { id: '43',title: 'Buns', image: buns, price: '80', path: '' },
    { id: '44',title: 'Donuts', image: donut, price: '120', path: '' },
    { id: '45',title: 'Croissant', image: croissant, price: '180', path: '' },
    { id: '46',title: 'Cake', image: cake, price: '400', path: '' },
    { id: '47',title: 'Cookies', image: cookies, price: '50', path: '' },
    { id: '48',title: 'Brownies', image: brownies, price: '240', path: '' },
    { id: '49',title: 'Cupcakes', image: cupcake, price: '150', path: '' }


];

const diary: CardTileDetails[] = [
    { id: '50',title: 'Cheese', image: cheese, price: '2000', path: '' },
    { id: '51',title: 'Eggs', image: Product3, price: '50', path: '' },
    { id: '52',title: 'Milk', image: milk, price: '1000', path: '' },
    { id: '53',title: 'Yogurt', image: yogurt, price: '80', path: '' },
    { id: '54',title: 'Butter', image: butter, price: '1300', path: '' },
    { id: '55',title: 'Curd', image: curd, price: '500', path: '' },
    { id: '56',title: 'Ghee', image: ghee, price: '2000', path: '' },
    { id: '58',title: 'Milk Powder', image: milkpowder, price: '800', path: '' }


];


export const CardTileListConfig = { CardTileData, CardDiscountData, fruits, vegetables, flour, meat, bakery, diary };
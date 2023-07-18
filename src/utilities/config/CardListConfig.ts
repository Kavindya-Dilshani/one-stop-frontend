import { CardListDetails } from '../../shared/models/CardListListModel';
import papaya from '../../assets/images/papaya.png';
import avocado from '../../assets/images/avocado.png';
import coconut from '../../assets/images/coconut.png';
import garlic from '../../assets/images/garlic.png';
import noodles from '../../assets/images/noodles.png';
import teapouch from '../../assets/images/teapouch.png';

const CardListData: CardListDetails[] = [
    { id:'59',title: 'Papaya', image: papaya, discount: ' 50',price: ' 40',path:'' },
    { id:'60',title: 'Coconut', image: coconut, discount: ' 100',price: ' 90',path:'' },
    { id:'61',title: 'Garlic', image: garlic, discount: ' 70',price: ' 68',path:'' },
    { id:'62',title: 'Avocado', image: avocado, discount: ' 100',price: ' 95',path:'' },
    { id:'63',title: 'Noodles', image: noodles, discount: ' 280',price: ' 250',path:''},
    { id:'64',title: 'Tea Pouch', image: teapouch, discount: ' 90',price: ' 86',path:'' },

];



export const CardListConfig = { CardListData,};
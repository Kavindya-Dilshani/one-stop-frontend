import { CardListDetails } from '../../shared/models/CardListListModel';
import papaya from '../../assets/images/papaya.png';
import avocado from '../../assets/images/avocado.png';
import coconut from '../../assets/images/coconut.png';
import garlic from '../../assets/images/garlic.png';
import noodles from '../../assets/images/noodles.png';
import teapouch from '../../assets/images/teapouch.png';

const CardListData: CardListDetails[] = [
    { title: 'Papaya', image: papaya, discount: 'Rs 50',price: 'Rs 40',path:'' },
    { title: 'Coconut', image: coconut, discount: 'Rs 100',price: 'Rs 90',path:'' },
    { title: 'Garlic', image: garlic, discount: 'Rs 70',price: 'Rs 68',path:'' },
    { title: 'Avocado', image: avocado, discount: 'Rs 100',price: 'Rs 95',path:'' },
    { title: 'Noodles', image: noodles, discount: 'Rs 280',price: 'Rs 250',path:''},
    { title: 'Tea Pouch', image: teapouch, discount: 'Rs 90',price: 'Rs 86',path:'' },

];



export const CardListConfig = { CardListData,};

import map from '../../assets/images/map.png'
import telephone from '../../assets/images/telephone.png'
import gmail from '../../assets/images/gmail.png'
import { ContactInfoDetails } from '../../shared/models/ContactInfo';


const ContactInfoData: ContactInfoDetails[] = [
    { title: 'Office Address', image: map, detail: '471, Galle Road, Colombo 3, Kollupitiya,Sri Lanka' },
    { title: 'Phone Number', image: telephone, detail: '011-2445670' },
    { title: 'Email Address', image: gmail, detail: 'onestop@gmail.com' }
];



export const ContactInfoConfig = { ContactInfoData};
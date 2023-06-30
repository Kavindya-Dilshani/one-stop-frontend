import member1 from '../../assets/images/member1.jpg';
import member2 from '../../assets/images/member2.jpg';
import member3 from '../../assets/images/member3.jpg';
import member4 from '../../assets/images/member4.jpg'; 
import { TeamDetails } from '../../shared/models/TeamModels';

const TeamCardData: TeamDetails[] = [
    { position: 'CEO', image: member1, name: 'Chethana Wijesuriya' },
    { position: 'Human Resource', image: member2, name: 'Nuwan Dasanayake' },
    { position: 'Marketing Manager', image: member3, name: 'Thushani Munasinghe' },
    { position: 'Store Manager', image: member4, name: 'Udul Dissanayake' }
];


export const TeamConfig = {TeamCardData };
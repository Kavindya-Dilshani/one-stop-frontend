import member1 from '../../assets/images/member1.jpg';
import member2 from '../../assets/images/member2.jpeg';
import member3 from '../../assets/images/member3.jpg';
import member4 from '../../assets/images/member4.jpg'; 
import { TeamDetails } from '../../shared/models/TeamModels';

const TeamCardData: TeamDetails[] = [
    { position: 'CEO', image: member1, name: 'Anura Jayawardhana' },
    { position: 'Human Resource', image: member2, name: 'ggg' },
    { position: 'Marketing Manager', image: member3, name: 'hhh' },
    { position: 'Store Manager', image: member4, name: 'jjj' }
];


export const TeamConfig = {TeamCardData };
import { AboutUs} from '../../pages/about/components/about-us/AboutUs';
import { Banner } from '../home/components/banner/Banner';
import { Testimonial } from '../home/components/testimonial/Testimonial';
import {AboutCard} from './components/about-card/AboutCard';
import { TeamCard } from './components/team-card/TeamCard';
import './About.css';



export const About = () => {
    return (
        <>
            <div>
                <AboutUs />
                <AboutCard/>
                <h3 className='py-4 '></h3>
                <h2 className='py-4 pb-3 fs-1  text-center'> Meet Our Expert Team</h2>
                <TeamCard/>
                <h3 className='py-4 '></h3>
                <Testimonial/>
                <h3 className='py-4 '></h3>
                <Banner/>
            </div>
        </>
    )
}

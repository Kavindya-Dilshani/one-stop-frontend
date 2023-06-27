import { AboutUs} from '../../pages/about/components/about-us/AboutUs';
import { Banner } from '../home/components/banner/Banner';
import { Testimonial } from '../home/components/testimonial/Testimonial';
import {AboutCard} from './components/about-card/AboutCard';
import { Counter} from './components/counter/Counter';
import { TeamCard } from './components/team-card/TeamCard';



export const About = () => {
    return (
        <>
            <div>
                <AboutUs />
                <AboutCard/>
                <h3 className='py-3 '></h3>
                <Counter/>
                <h3 className='py-5 fs-1  text-center'> Meet Our Expert Team</h3>
                <TeamCard/>
                <Testimonial/>
                <Banner/>
            </div>
        </>
    )
}

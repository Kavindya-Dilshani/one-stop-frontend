
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import './TeamCard.css';
import { TeamConfig } from '../../../../utilities/config/TeamConfig';

export const TeamCard = () => {
    const teams = TeamConfig.TeamCardData;

    return (
        <>
            <div className='container mt-2 pt-2'>
            <div className='row'>
            <div className='row row-cols-2 row-cols-md-4 g-4'>
                {teams && teams.map((_team, index) => {
                    return (
                        <div className='col' key={index}>
                            <div className='card'>
                                <div className='team-image p-6  text-center'>
                                    <a className='link-card-team' href='#'>
                                        <img src={_team.image} className="card-img-top" />
                                    </a>
                                    <div className='member-position text-center pt-4'>
                                        <h6>{_team.position}</h6>
                                        <div className='member-name text-center pt-4'/>
                                        <h5>{_team.name}</h5>
                                        <div className='card-icons g-4'>
                                        <ul>
                                            <a className='link-card-icons' href='#'></a>
                                            <a href='#'><i className='fab fa-facebook-f'></i><FaFacebookF/></a>
                                            <a href='#'><i className='fab fa-twitter'></i><FaLinkedinIn  /></a>
                                            <a href='#'><i className='fab fa-google-plus-g'></i><FaTwitter /></a>
                                        </ul>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })
                }
            </div>
            </div>
            </div>
        </>
    );
}
                










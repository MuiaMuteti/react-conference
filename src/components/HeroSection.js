import './HeroSection.css'

import { Link } from 'react-router-dom';

export default function HeroSection() {
    const confDate = new Date();
    confDate.setDate(confDate.getDate() + 1);

    return (
        <div className="heroSection">
            <div className="hero">
                <div className="heroText" >
                    <h1 id="heroTitle">ReactMeet, the informative React conference</h1>
                    <p>Meet other developers to share ideas, solutions and opportunities</p>    
                    <p id="joinUs">Join us</p>
                    <p>📅 { confDate.toDateString() }</p>
                    <p id="locationLink">🏢 <Link to="location">Developers' Hub</Link></p>

                    <Link className="bookButton" to="#">Book Now</Link>
                </div> 
            </div>       
            
            <div id="heroDesc">
                <p>ReactMeet is an annual front end developers' conference.</p>
                <p id="heroDescPara">Join experienced developers for training, mentorship and 
                    discover job opportunities. Meet your peers from all 
                    over the world to learn, network and formulate effective 
                    solutions to common programming solutions using the React Javascript framework.</p>
            </div>            
        </div>
    );
}
import './Location.css'

import conferenceBuilding from './images/conference-building.jpg';

export default function Location() {
    return (
        <div id="location" >
            <h1>Location</h1>
            
            <div className="locationContainer">
                <img 
                    id="locationImage" 
                    src= { conferenceBuilding } 
                    alt="developers' hub building" />

                <div id="locationDetails" >
                    <h2>The Developers' Hub</h2>
                    <p>P.O. Box 1234</p>
                    <p>Nairobi</p>
                    <p>Westlands</p>
                    <p>Mara road</p>
                    <p>Visionary tower</p>
                    <p>4<sup>th</sup> floor, conference hall 12</p>
                    <p>Call: 0712 345 678</p>
                </div>
            </div>

        </div>
    );
}
import './Speakers.css'

import ImageContentCard from './ImageContentCard';

import SpeakerData from './data/SpeakerData';

export default function Speakers() {
    let mSpeakers = SpeakerData;

    let speakersList = mSpeakers.map(speaker => (
        <ImageContentCard
            key={speaker.id}
            imgSrc={speaker.avatarSrc}
            title={speaker.name}
            >
            <div className="speaker" >
                <h3>{ speaker.name }</h3>
                <p>{ speaker.title }</p>
            </div>
        </ImageContentCard>
    ));

    return (
        <section id="speakers">
            <h2>Meet the speakers</h2>
            <div className="speakersList">
                { speakersList }
            </div>
        </section>
    );
}
import './Schedule.css'
import Topics from './data/TopicData'

export default function Schedule() {
    let topics = Topics;

    let topicRows = topics.map(topic => (
        <tr key={topic.id} >
            <td data-th="Topic" >{ topic.topic }</td>
            <td data-th="Speaker" >{ topic.speaker }</td>
            <td data-th="Date" >{ topic.time.date }</td>
            <td data-th="From" >{ topic.time.from }</td>
            <td data-th="To" >{ topic.time.to }</td>
        </tr>
    ));

    return (
        <div id="schedule" >
            <h1>Conference schedule</h1>
            <table>
            <thead>
                <tr>
                    <th>Topic</th>
                    <th>Speaker</th>
                    <th>Date</th>
                    <th>From</th>
                    <th>To</th>        
                </tr>
            </thead>
            <tbody>
                { topicRows }
            </tbody>
            </table>        
        </div>
    );
}
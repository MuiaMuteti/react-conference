import './NoMatch.css'

import PageNotFoundImg from './images/undraw_page_not_found.svg';

export default function NoMatch() {
    return (
        <div className="error">
            <img src={PageNotFoundImg} alt="page not found" />
            <h1>The requested page is not available</h1>
        </div>
    );
}
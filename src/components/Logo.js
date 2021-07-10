import { Link } from 'react-router-dom';
import './Logo.css'

// Shows logo text.
// a callback can be provided in the props for when the link is clicked
export default function Logo(props) {
    return (
        <Link
            id="logo" 
            to="/"
            onClick={props.handleLinkClick} >
                <span className="tags">&lt;</span> <span className="logoTitle">ReactMeet</span> <span className="tags">/&gt;</span>
        </Link>
    );
}
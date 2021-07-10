import './NoMatch.css'

export default function NoMatch() {
    return (
        <div className="error">
            <img src="/images/undraw_page_not_found.svg" alt="page not found" />
            <h1>The requested page is not available</h1>
        </div>
    );
}
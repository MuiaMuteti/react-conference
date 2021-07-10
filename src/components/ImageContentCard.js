import './ImageContentCard.css'

export default function ImageContentCard(props) {
    return (
        <div className="imageContentCard" >
            <img
                src={props.imgSrc} 
                alt={props.title}
                className="contentImage"
                />
            { props.children }
        </div>
    );
}
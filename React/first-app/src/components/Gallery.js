const Gallery = (props) => {
    return (
    <div id="child">
        <img id="gallery-img" src={props.source}></img>
        <p>{props.text}</p>
    </div>
    )
}

export default Gallery;
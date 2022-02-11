function GifList({title, url}) {
    return(
        <ul className="gif-box">
            <li>
                <img src={url} alt={title} />
            </li>
        </ul>
    )

}

export default GifList;
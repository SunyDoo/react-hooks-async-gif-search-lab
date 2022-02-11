import {useState, useEffect} from "react"
import GifList from "./GifList"
import GifSearch from "./GifSearch"

function GifListContainer() {
    const [searchTerm, setSearchTerm] = useState("dog")
    const [searchResults, setSearchResults] = useState([])

    const gifList = () => {
        if (!!searchResults) {
            return searchResults.map(gif => {
                return(
                    <GifList key={gif.id} title={gif.title} url={gif.images.original.url} />
                )
            })
        }
    }

    useEffect(() => {
        const FETCH_URL = "https://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&rating=g&q=" + searchTerm
        
        fetch(FETCH_URL)
        .then(response => response.json())
        .then(json => setSearchResults(json.data.slice(0,3)))
    }, [searchTerm])

    return (
        <div>
            <GifSearch updateSearchTerm={setSearchTerm} runGifSearch={gifList} />
            {gifList()}
        </div>
    )
}

export default GifListContainer;
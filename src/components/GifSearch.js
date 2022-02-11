function GifSearch({updateSearchTerm, runGifSearch}) {

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.target)
        updateSearchTerm(event.target[0].value)
        runGifSearch()
    }

    return(
        <div className="search-form">
            <form onSubmit={handleSubmit}>
                <input />
                <button>Search Now!</button>
            </form>
        </div>
    )
}

export default GifSearch;
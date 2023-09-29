import React, { useEffect, useState } from 'react'
import SearchVideoCard from './SearchVideoCard'
import { useSearchParams } from 'react-router-dom'
import { SearchAPI } from '../Helper/YoutubeAPI'

const SearchListing = () => {
    const [searchParams] = useSearchParams()
    const query = searchParams.get("search_query")
    const [searchResults, setSearchResults] = useState([])

    useEffect(() => {
        async function fetchData() {
            let data = await SearchAPI(query)
            data = data?.items?.filter(vid => vid.id.kind === "youtube#video") ?? []
            setSearchResults(data)
        }
        fetchData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>
            {searchResults.map(video => <SearchVideoCard key={video.etag} {...video} />)}
        </div>
    )
}

export default SearchListing
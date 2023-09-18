import React from 'react'
import { useSearchParams } from 'react-router-dom'

export const Watch = () => {
    const [searchParams] = useSearchParams()
    const videoId = searchParams.get("v")
    return (
        <div >
            <iframe width="949" height="534" src={"https://www.youtube.com/embed/" + videoId}
                title="I Never Want to Write Tailwind Any Other Way"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen></iframe>
        </div>
    )
}

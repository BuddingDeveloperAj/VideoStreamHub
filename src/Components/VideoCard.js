import React from 'react'
import { Link } from 'react-router-dom'

const VideoCard = (props) => {

    let { statistics: { viewCount = 0 } = { viewCount: 0 }, snippet, videoId } = props
    let { thumbnails, channelTitle, title } = snippet

    const cardClass = `p-2 shadow-lg rounded-lg `;

    return (
        <div className={cardClass}>
            <Link to={"/watch?v=" + videoId}>
                <div className='flex flex-col'>
                    <img className='rounded-lg object-contain' src={thumbnails?.maxres?.url ?? thumbnails.medium?.url} alt="thumbnail" />
                    <div className="cursor-pointer">
                        <p title={title} className='pt-2 font-semibold line-clamp-2'>{title}</p>
                    </div>
                    <div className=''>
                        <p className='font-lg'>{channelTitle}</p>
                        {(viewCount > 0) ? <p>{(viewCount / 1000000).toFixed(1) + 'M'} Views </p> : ' '}
                    </div>
                </div>
            </Link>
        </div>
    )
}


export default VideoCard
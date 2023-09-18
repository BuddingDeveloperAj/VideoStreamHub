import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const VideoCard = (props) => {
    let mainSidebar = useSelector(store => store.app.isMainSideBar)

    let { statistics: { viewCount = 0 }, snippet } = props
    let { thumbnails, channelTitle, title } = snippet

    const cardClass = `p-4 shadow-lg rounded-lg ${mainSidebar ? 'w-1/4' : 'w-1/3'}`;

    return (
        <div className={cardClass}>
            <Link to={"/watch?v=" + props.id}>
                <div >
                    <img className='rounded-lg object-cover w-full' src={thumbnails?.maxres?.url ?? thumbnails.medium?.url} alt="thumbnail" />
                    <div className="cursor-pointer">
                        <p title={title} className='py-2 font-semibold'>{title}</p>
                    </div>
                    <p className='font-lg'>{channelTitle}</p>
                    <p>{(viewCount / 1000000).toFixed(1) + 'M'} Views </p>
                </div>
            </Link>
        </div>
    )
}


export default VideoCard
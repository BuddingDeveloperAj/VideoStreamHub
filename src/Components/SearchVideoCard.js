import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { ChannelData } from '../Helper/YoutubeAPI';
import Profile from "../Asset/profile-user.png"
dayjs.extend(relativeTime);

const SearchVideoCard = (video) => {
    const { snippet: { channelId, channelTitle, description, thumbnails, title, publishedAt }, id } = video
    const [channelData, setChannelData] = useState(null)
    const [isHovered, setIsHovered] = useState(false);
    let hoverTimeout;

    const handleMouseEnter = () => {
        hoverTimeout = setTimeout(() => {
            setIsHovered(true);
        }, 1000); // 1000 milliseconds = 1 second
    };

    const handleMouseLeave = () => {
        clearTimeout(hoverTimeout);
        setIsHovered(false);
    };

    const decodeHtml = (html) => {
        const txt = document.createElement('textarea');
        txt.innerHTML = html;
        return txt.value;
    };

    useEffect(() => {
        async function fetchChannel() {
            let data = await ChannelData(channelId)
            setChannelData(data)
        }
        fetchChannel()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className='grid grid-cols-4 m-1 p-3 shadow-sm bg-gray-50'>
            <Link to={"/watch?v=" + id.videoId} >
                <div className='col-span-1 '
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>
                    {isHovered ? (
                        <Link to={"/watch?v=" + id.videoId}>
                            <iframe
                                width={thumbnails.medium.width}
                                height={thumbnails.medium.height}
                                src={`https://www.youtube.com/embed/${id.videoId}?autoplay=1&mute=1&vq=hd480`}
                                title="Youtube Video"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </Link>

                    ) : (
                        <img
                            className='rounded-lg'
                            src={thumbnails.medium.url}
                            alt='videoThumbnail'
                        />
                    )}
                </div>
            </Link >
            <div className='col-span-3 px-4'>
                <Link to={"/watch?v=" + id.videoId} >
                    <p className='font-medium text-lg'>{decodeHtml(title)}</p>
                </Link>
                <p className='text-sm'>{dayjs(publishedAt).fromNow()}</p>
                <Link to={"/watch?v=" + channelId} >
                    <div className='mt-3 flex'>
                        <img className='w-7 rounded-full' src={channelData?.items[0]?.snippet?.thumbnails?.high?.url ?? Profile} alt="ChannelLogo" />
                        <p className='ml-3 text-gray-600 hover:text-black'>{channelTitle}</p>
                    </div>
                </Link>
                <Link to={"/watch?v=" + id.videoId} >
                    <p className='line-clamp-1 text-xs mt-5'>{description}</p>
                </Link>
            </div>
        </div >

    )
}

export default SearchVideoCard

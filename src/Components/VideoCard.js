import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { formatNumber } from '../Helper/CountFomatter';
import { useSelector } from 'react-redux';

const VideoCard = (props) => {
    let { statistics: { viewCount = 0 } = { viewCount: 0 }, snippet, videoId } = props;
    let { thumbnails, channelTitle, title } = snippet;
    const [isHovered, setIsHovered] = useState(false);
    const [IframeDimension, setIframeDimension] = useState({
        width: 322
    })
    let hoverTimeout;
    const cardRef = useRef(null);
    const mainSidebar = useSelector(store => store.app.isMainSideBar);

    const handleMouseEnter = () => {
        hoverTimeout = setTimeout(() => {
            setIsHovered(true);
        }, 1000); // 1000 milliseconds = 1 second
    };

    const handleMouseLeave = () => {
        clearTimeout(hoverTimeout);
        setIsHovered(false);
    };

    const setIframeDimensions = () => {
        const divElement = cardRef.current;
        const { width } = divElement.getBoundingClientRect();
        setIframeDimension({ width })
    };

    useEffect(() => {
        // Function to set the dimensions of the iframe based on the div's dimensions
        setIframeDimensions()
    }, [mainSidebar]);


    return (
        <div className="p-2 shadow-lg rounded-lg">
            <Link to={"/watch?v=" + videoId}>
                <div className='flex flex-col'>
                    <div ref={cardRef}
                        className='col-span-1'
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        {isHovered ? (
                            <Link to={"/watch?v=" + videoId}>
                                <iframe
                                    width={IframeDimension.width}
                                    height={(IframeDimension.width / 16) * 9}
                                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&vq=hd480`}
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
                    <div className="cursor-pointer">
                        <p title={title} className='pt-2 font-semibold line-clamp-2'>
                            {title}
                        </p>
                    </div>
                    <div className=''>
                        <p className='font-lg'>{channelTitle}</p>
                        {viewCount > 0 ? <p>{formatNumber(viewCount)} Views </p> : ' '}
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default VideoCard;

import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { formatNumber } from '../Helper/CountFomatter';

const SuggestionVideoCard = (props) => {
    let { statistics: { viewCount = 0 } = { viewCount: 0 }, snippet, id: videoId } = props;
    let { thumbnails, channelTitle, title } = snippet;
    const [isHovered, setIsHovered] = useState(false);
    const [IframeDimension, setIframeDimension] = useState({
        width: 322
    })
    let hoverTimeout;
    const cardRef = useRef(null);

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
    }, []);


    return (
        <div className="pl-4 pb-2 mb-2  rounded-lg">
            <Link to={"/watch?v=" + videoId}>
                <div className='grid grid-cols-5 gap-3'>
                    <div ref={cardRef}
                        className='col-span-2'
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
                                className='rounded-lg w-full'
                                src={thumbnails.medium.url}
                                alt='videoThumbnail'
                            />
                        )}
                    </div>
                    <div className='col-span-3 p-2'>
                        <div className="cursor-pointer">
                            <p title={title} className='pt-2 font-semibold text-sm line-clamp-2'>
                                {title}
                            </p>
                        </div>
                        <div>
                            <p className='text-sm'>{channelTitle}</p>
                            {viewCount > 0 ? <p className='text-xs'>{formatNumber(viewCount)} Views </p> : ' '}
                        </div>
                    </div>
                </div>

            </Link>
        </div>
    );
};

export default SuggestionVideoCard;

import React, { useEffect, useState } from 'react';
import { YOUTUBE_API } from '../Utils/config';
import VideoCard from './VideoCard';

const VideoContainer = () => {
    const [Data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            let response = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=50&chart=mostPopular&regionCode=IN&key=` + YOUTUBE_API);
            let jsonData = await response.json();
            setData(jsonData);
        }
        fetchData();
    }, []);

    if (!Data.items || Data.items.length === 0) {
        return (
            <div className='flex'>
            </div>
        );
    }

    return (
        <div className='p-2 m-2 flex flex-wrap'>
            {Data.items.map(video => <VideoCard key={video.id} {...video} />)}
        </div>
    );
};

export default VideoContainer;

import React, { useEffect, useState } from 'react';
import VideoCard from './VideoCard';
import { useDispatch, useSelector } from 'react-redux';
import VideoCardShimmer from '../Shimmers/VideoCardShimmer';
import { setVideos } from '../Utils/appSlice';
import { Home } from '../Helper/YoutubeAPI';

const VideoContainer = () => {
    const mainSidebar = useSelector(store => store.app.isMainSideBar);
    const data = useSelector(store => store.app.videos);
    const dispatch = useDispatch();
    const [page, setPage] = useState("")
    const pageToken = useSelector(store => store.app.pageToken)

    async function fetchData() {
        try {
            let popularVideos = await Home(page)
            dispatch(setVideos(popularVideos));
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);


    const handleInfiniteScroll = async () => {
        const innerHeight = window.innerHeight
        const scrollHeight = window.document.documentElement.scrollHeight
        const scrollTop = window.document.documentElement.scrollTop

        if (innerHeight + scrollTop + 100 >= scrollHeight && pageToken) {
            setPage(pageToken)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleInfiniteScroll)
        return () => {
            window.removeEventListener('scroll', handleInfiniteScroll)
        }
    })

    if (!data || data.length === 0) {
        const dummy = new Array(50).fill(0);
        return (
            <div className={`p-2 m-2 grid ${mainSidebar ? 'grid-cols-4' : 'grid-cols-3'} gap-3 grid-flow-dense`}>
                {dummy.map((_, ind) => <VideoCardShimmer key={ind} />)}
            </div>
        );
    }

    return (

        <div className={`p-2 m-2 grid ${mainSidebar ? 'grid-cols-4' : 'grid-cols-4'} gap-3 grid-flow-dense`}>
            {data.map((video, ind) => <VideoCard key={ind} {...video} />)}
        </div>
    );
};

export default VideoContainer;

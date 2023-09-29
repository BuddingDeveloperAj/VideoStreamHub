import { useSearchParams } from 'react-router-dom'
import CommentContainer from './CommentContainer'
import { useEffect, useState } from 'react'
import { ChannelData, getVideoDetails } from '../Helper/YoutubeAPI'
import { faThumbsDown, faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { formatNumber, formatNumberWithCommas } from '../Helper/CountFomatter';
import dayjs from 'dayjs';

export const Watch = () => {
    const [searchParams] = useSearchParams()
    const [pageInfo, setPageInfo] = useState({
        videoData: null,
        channelData: null
    })
    const [showFullInfo, setShowFullInfo] = useState(false);
    const videoId = searchParams.get("v")

    const screenWidth = window.innerWidth;
    const iframeWidth = screenWidth * 0.6;
    const iframeHeight = (iframeWidth / 16) * 9;

    useEffect(() => {
        (async function () {
            let videoData = await getVideoDetails(videoId)
            let channelData = await ChannelData(videoData.items[0].snippet.channelId)
            setPageInfo((prev) => {
                return {
                    ...prev,
                    videoData: videoData.items[0],
                    channelData: channelData.items[0]
                }
            })
        })()
    }, [])

    console.log(pageInfo)
    return (
        <div className='grid grid-flow-col grid-cols-3 mx-3'>
            <div className='col-span-2'>
                <div className=''>
                    <iframe width={iframeWidth} height={iframeHeight} src={"https://www.youtube.com/embed/" + videoId + "?autoplay=1&vq=hd1080"}
                        title="Youtube Video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen></iframe>
                </div>
                <p className='font-semibold my-2'>{pageInfo?.videoData?.snippet?.title}</p>
                <div className='flex items-center justify-between mr-8 pr-2'>
                    <div className='flex items-center'>
                        <img className='w-10 rounded-full' src={pageInfo?.channelData?.snippet?.thumbnails?.high?.url} alt="channelPic" />
                        <div>
                            <p className='px-3 font-semibold'>{pageInfo?.channelData?.snippet?.title}</p>
                            <p className='px-3 text-xs font-semibold'>
                                {(pageInfo?.channelData?.statistics?.subscriberCount) ? (formatNumber(pageInfo?.channelData?.statistics?.subscriberCount) + ' Subscribers') : ''}
                            </p>
                        </div>
                    </div>
                    <div className='flex'>
                        <button><FontAwesomeIcon icon={faThumbsUp} style={{ color: "#000000" }} /> {formatNumber(pageInfo?.videoData?.statistics?.likeCount)}</button>
                        <button className='ml-4'><FontAwesomeIcon icon={faThumbsDown} style={{ color: "#000000" }} /></button>
                    </div>
                </div>
                <div className={`bg-gray-200 mt-3 p-2 rounded-lg`}>
                    <p className='font-semibold py-2'>
                        <span className='pr-2'>{formatNumberWithCommas(Number(pageInfo?.videoData?.statistics?.viewCount))} views</span>
                        <span className='pl-2'>{dayjs(pageInfo?.videoData?.statistics?.publishedAt).format("MMM DD, YYYY")}</span>
                    </p>
                    <div className={showFullInfo ? '' : 'line-clamp-2'}>
                        <p className='whitespace-pre-line'>{pageInfo?.videoData?.snippet?.localized?.description}</p>
                    </div>
                    {!showFullInfo && (
                        <button
                            className='text-blue-500 cursor-pointer'
                            onClick={() => setShowFullInfo(true)}
                        >
                            Show More
                        </button>
                    )}
                    {showFullInfo && (
                        <button
                            className='text-blue-500 cursor-pointer'
                            onClick={() => setShowFullInfo(false)}
                        >
                            Show Less
                        </button>
                    )}
                </div>
                <div className='rounded-lg'>
                    <CommentContainer id={videoId} />
                </div>
            </div>
            <div className='col-span-1'>

            </div>
        </div>
    )
}

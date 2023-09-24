import React from 'react'

const VideoCardShimmer = ({ ind }) => {

    const cardClass = `p-2 shadow-lg rounded-lg bg-gray-100 h-80`;

    return (
        <div key={ind} className={cardClass}>

            <div className='flex flex-col'>
                <div className='rounded-lg object-cover h-48 bg-gray-200 my-2'></div>
                <div >
                    <p className='py-2 my-2 font-semibold bg-gray-300'></p>
                    <p className='py-2 font-semibold bg-gray-300'></p>
                </div>
                <div className='mt-2'>
                    <p className='py-2 my-1 w-56 bg-gray-300'></p>
                    <p className='py-2 w-36 bg-gray-300'></p>
                </div>
            </div>
        </div>
    )
}

export default VideoCardShimmer
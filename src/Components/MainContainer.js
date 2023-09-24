import React from 'react'
import TagsList from './TagsList'
import VideoContainer from './VideoContainer'

const MainContainer = () => {
    return (
        <div className='flex flex-col'>
            <div>
                <TagsList />
            </div>
            <div >
                <VideoContainer />
            </div>
        </div>
    )
}

export default MainContainer
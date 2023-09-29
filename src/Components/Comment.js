import { faThumbsDown, faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Profile from "../Asset/profile-user.png"
import React from 'react';

const Comment = ({ comment }) => {
    const { profilePic, authorName, displayMessage, reply = false, likeCount = 0 } = comment;

    const imageStyle = reply ? 'w-8 h-8 mt-2' : 'w-10 h-10';

    return (
        <div className='flex py-1'>
            <div className='mr-4 flex-shrink-0'>
                <img
                    className={`rounded-full ${imageStyle}`}
                    src={profilePic || Profile}
                    alt="profile"
                />
            </div>
            <div>
                <p className='font-semibold text-sm cursor-pointer'>@{authorName}</p>
                <p className='w-full overflow-hidden'>{displayMessage}</p>
                <button className='mr-4'><FontAwesomeIcon icon={faThumbsUp} style={{ color: "#000000", }} /> {likeCount}</button>
                <button className='ml-4'><FontAwesomeIcon icon={faThumbsDown} style={{ color: "#000000", }} /></button>
            </div>
        </div>
    );
};

export default Comment;

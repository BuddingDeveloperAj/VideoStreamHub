import React, { useEffect, useRef, useState } from 'react';
import { getVideoComments } from '../Helper/YoutubeAPI';
import Comment from './Comment';

const CommentContainer = ({ id: videoId }) => {
    const [comments, setComments] = useState([]);
    let page = useRef('');
    const [commentPage, setCommentPage] = useState([]);
    const [showReplies, setShowReplies] = useState({});

    useEffect(() => {
        (async function () {
            let comments = await getVideoComments(videoId, commentPage);
            page.current = comments.nextPageToken;
            setComments((prev) => [...prev, ...comments.items]);
        })();
    }, [commentPage]);

    const handleInfiniteScroll = async () => {
        const innerHeight = window.innerHeight;
        const scrollHeight = window.document.documentElement.scrollHeight;
        const scrollTop = window.document.documentElement.scrollTop;

        if (innerHeight + scrollTop + 100 >= scrollHeight && page.current) {
            setCommentPage(page.current);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleInfiniteScroll);
        return () => {
            window.removeEventListener('scroll', handleInfiniteScroll);
        };
    }, []);

    const toggleReplies = (commentId) => {
        setShowReplies((prevShowReplies) => ({
            ...prevShowReplies,
            [commentId]: !prevShowReplies[commentId],
        }));
    };

    const CommentList = ({ comment }) => {
        let topLevelComment = comment.snippet.topLevelComment.snippet;
        let profilePic = topLevelComment?.authorProfileImageUrl;
        let authorName = topLevelComment.authorDisplayName;
        let displayMessage = topLevelComment.textOriginal;
        let replies = comment?.replies?.comments ?? [];
        let likeCount = topLevelComment?.likeCount ?? 0
        const commentId = comment.id;

        return (
            <div>
                <div className='my-2'>
                    <Comment comment={{ profilePic, authorName, displayMessage, likeCount }} />
                    {replies.length ? (<button
                        onClick={() => toggleReplies(commentId)}
                        className='text-blue-500 cursor-pointer ml-14 text-xs'
                    >
                        {showReplies[commentId] ? `${replies.length > 1 ? 'Hide replies' : 'Hide reply'}` : `${replies.length > 1 ? `${replies.length} Replies` : `${replies.length} Reply`}`}
                    </button>) : ''}
                </div>
                {showReplies[commentId] && (
                    <div className='pl-14 border-l border-gray-400 border-r-red-400'>
                        {replies.map((reply) => {
                            let profilePic = reply.snippet?.authorProfileImageUrl;
                            let authorName = reply.snippet?.authorDisplayName;
                            let displayMessage = reply.snippet?.textOriginal;
                            let likeCount = reply.snippet?.likeCount ?? 0

                            return (
                                <Comment
                                    key={reply.id}
                                    comment={{
                                        profilePic,
                                        authorName,
                                        displayMessage,
                                        reply: true,
                                        likeCount
                                    }}
                                />
                            );
                        })}
                    </div>
                )}
            </div>
        );
    };

    return (
        <div className='mt-2 bg-gray-50 p-5'>
            <h1 className='font-semibold text-lg mb-4'>Comments</h1>
            {comments.map((comm) => (
                <CommentList key={comm.id} comment={comm} />
            ))}
        </div>
    );
};

export default CommentContainer;

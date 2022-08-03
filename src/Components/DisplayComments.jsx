import React, { useContext } from 'react';
import { useAllComments } from '../Context/CommentsContext';
import RenderComment from './Utils/RenderComment';

const DisplayComments = () => {
    const comments = useAllComments();
    console.log(comments);

    return (
        <div className='CommentSection'>
            {
                comments.map((comment, i) => (
                    <RenderComment key={i} author={comment.author} commentData={comment.commentData} timestamp={comment.timestamp} upvotes={comment.upvotes} unvotes={comment.unvotes} replies={comment.replies} />
                ))
            }
        </div>
    )
}

export default DisplayComments;

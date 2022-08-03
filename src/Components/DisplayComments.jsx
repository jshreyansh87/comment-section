import React, { useContext } from 'react';
import { useAllComments } from '../Context/CommentsContext';

const DisplayComments = () => {
    // const comments = useAllComments();
    const comments = [
        {
            author: "Rob Hope",
            commentData: "Hey I added a new Comment under my name",
            timestamp: new Date("1 August 2022"),
            upvotes: 0,
            unvotes: 0,
            replies: []
        },
    ];
    console.log(comments);

    return (
        <div>
            diplay comments component
        </div>
    )
}

export default DisplayComments

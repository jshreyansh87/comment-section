import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useLoggedInUser } from '../Context/UsersContext';

const PostComment = () => {
    const [commentToPost, setCommentToPost] = useState("");

    const user = useLoggedInUser();

    const postCurrentComment = () => {
        if(commentToPost.trim()){
            const currentComment = {
                authorId: user.id,
                author: user.username,
                commentData: commentToPost,
                timestamp: new Date(),
                upvotes: 0,
                unvotes: 0,
                replies: []
            }
            console.log(currentComment);
        }
    };

    return (
        <div className='PostCommentSection'>
            <Avatar alt={user.username} src="#" />
            <TextField className='PostCommentTextField' label="What are your thoughts?" variant="outlined" inputProps={{ maxLength: 1000 }} value={commentToPost} onChange={(e) => setCommentToPost(e.target.value)} />
            <Button className='PostCommentButton' variant="contained" onClick={postCurrentComment}>Comment</Button>
        </div>
    )
}

export default PostComment

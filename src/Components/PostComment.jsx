import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const PostComment = () => {
    const [commentToPost, setCommentToPost] = useState("");

    return (
        <div className='PostCommentSection'>
            <Avatar alt="Remy Sharp" src="#" />
            <TextField className='PostCommentTextField' label="What are your thoughts?" variant="outlined" value={commentToPost} onChange={(e) => setCommentToPost(e.target.value)} />
            <Button className='PostCommentButton' variant="contained">Comment</Button>
        </div>
    )
}

export default PostComment

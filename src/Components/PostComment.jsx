import React from 'react';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const PostComment = () => {
    return (
        <div className='PostCommentSection'>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <TextField className='PostCommentTextField' id="outlined-basic" label="What are your thoughts?" variant="outlined" />
            <Button id='PostCommentButton' variant="contained">Comment</Button>
        </div>
    )
}

export default PostComment

import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const RenderComment = ({ author, commentData, timestamp, upvotes, unvotes, replies }) => {
  return (
    <div className='RenderCommentContainer'>

      <div className="CommentAuthorAvatar">
        <Avatar alt={author} src="#" className='CommentAuthorAvatar' />
      </div>

      <div className="RenderCommentData">

        <div className="CommentHeader">
          <h3 className='CommentAuthorHeading'>{author}</h3>
          <p className='CommentTimeStamp'>{parseInt((new Date().getTime() - timestamp) / (1000 * 3600 * 24))} Days ago</p>
        </div>

        <p>{commentData}</p>

        <div>
          <Button variant="text" className='CommentButton'><ArrowDropUpIcon /> Upvote</Button>
          <Button variant="text" className='CommentButton'><ArrowDropDownIcon /> Unvote</Button>
          <Button variant="text" className='CommentButton'>Reply</Button>
        </div>

      </div>
    </div>
  )
}

export default RenderComment

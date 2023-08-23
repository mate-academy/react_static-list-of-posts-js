import React from 'react';
import CommentInfo from '../CommentInfo/CommentInfo';
import './CommentList.scss';

const CommentList = ({ comments }) => (
  <div className="CommentList">
    {comments.map(comment => (
      <CommentInfo key={comment.id} comment={comment} />
    ))}
  </div>
);

export default CommentList;

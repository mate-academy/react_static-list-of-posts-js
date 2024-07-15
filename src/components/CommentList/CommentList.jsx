import React from 'react';
import './CommentList.scss';
import { CommentInfo } from '../CommentInfo';

const CommentList = ({ comments }) => (
  <div className="CommentList">
    {comments.map(comment => (
      <CommentInfo key={comment.id} comment={comment} />
    ))}
  </div>
);

export { CommentList };

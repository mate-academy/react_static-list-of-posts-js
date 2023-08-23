import React from 'react';
import './CommentList.scss';
import { CommentInfo } from '../CommentInfo';

export const CommentList = ({ comments }) => (
  <div className="CommentList">
    {comments.map(({ id, ...comment }) => (
      <CommentInfo
        key={id}
        comment={comment}
      />
    ))}
  </div>
);

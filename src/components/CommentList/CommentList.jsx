import React from 'react';
import { CommentInfo } from '../CommentInfo';

export const CommentList = ({ comments }) => {
  if (!Array.isArray(comments)) return null;

  return (
    <div className="CommentList">
      {comments.map(comment => (
        <CommentInfo key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

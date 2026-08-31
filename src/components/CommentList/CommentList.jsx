import React from 'react';
import { CommentInfo } from '../CommentInfo';

export const CommentList = ({ comments }) => {
  if (!comments || comments.length === 0) {
    return null;
  }

  return (
    <div className="CommentList">
      {comments.map(comment => (
        <div key={comment.id}>
          <CommentInfo comment={comment} />
        </div>
      ))}
    </div>
  );
};

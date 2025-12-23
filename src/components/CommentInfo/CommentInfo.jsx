import React from 'react';
import './CommentInfo.scss';

export const CommentInfo = ({ comment }) => {
  return (
    <div className="CommentInfo">
      <div className="CommentInfo__name">{comment.name}</div>
      <a href={`mailto:${comment.email}`} className="CommentInfo__email">
        {comment.email}
      </a>
      <div className="CommentInfo__body">{comment.body}</div>
    </div>
  );
};

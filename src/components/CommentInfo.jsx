import React from 'react';

export const CommentInfo = ({ comment }) => {
  return (
    <div className="CommentInfo">
      <p className="CommentInfo__name">{comment.name}</p>
      <p className="CommentInfo__email">{comment.email}</p>
      <p className="CommentInfo__body">{comment.body}</p>
    </div>
  );
};

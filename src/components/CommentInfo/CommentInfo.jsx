import React from 'react';
export const CommentInfo = ({ comment }) => (
  <div className="CommentInfo">
    <h4 className="CommentInfo__name">{comment.name}</h4>
    <a
      className="CommentInfo__email"
      href={`mailto:${comment.email}`}
    >
      {comment.email}
    </a>
    <p className="CommentInfo__body">{comment.body}</p>
  </div>
);

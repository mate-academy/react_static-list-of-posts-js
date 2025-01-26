import React from 'react';

export const CommentInfo = ({ comment }) => (
  <div className="CommentInfo comment-info">
    <h4 className="CommentInfo__name">{comment.name}</h4>
    <p className="CommentInfo__body">{comment.body}</p>
    <a className="CommentInfo__email" href={`mailto:${comment.email}`}>
      {comment.email}
    </a>
  </div>
);

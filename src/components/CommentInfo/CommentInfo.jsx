import React from 'react';
import './CommentInfo.scss';

export const CommentInfo = ({ comment }) => (
  <div className="CommentInfo">
    <span className="CommentInfo__name">{comment.name}</span>
    <a className="CommentInfo__email" href={`mailto:${comment.email}`}>
      {comment.email}
    </a>
    <p className="CommentInfo__body">{comment.body}</p>
  </div>
);

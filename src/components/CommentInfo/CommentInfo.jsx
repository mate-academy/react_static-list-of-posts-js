import React from 'react';
import './CommentInfo.scss';

export const CommentInfo = ({ comment }) => (
  <div className="CommentInfo">
    <div className="&__title">
      <span className="CommentInfo__name">{comment.name}</span>
      {' by '}
      <a className="CommentInfo__email" href={`mailto:${comment.email}`}>
        {comment.email}
      </a>
    </div>
    <div className="CommentInfo__body">{comment.body}</div>
  </div>
);

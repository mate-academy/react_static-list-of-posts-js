import React from 'react';
import './CommentInfo.scss';

export const CommentInfo = ({ comment }) => (
  <div className="CommentInfo">
    <p className="CommentInfo__body">{comment.body}</p>
    <p className="CommentInfo__name">{comment.name}</p>
    <p>
      <a className="CommentInfo__email" href={`mailto:${comment.email}`}>
         {comment.email}
      </a>
    </p>
  </div>
);

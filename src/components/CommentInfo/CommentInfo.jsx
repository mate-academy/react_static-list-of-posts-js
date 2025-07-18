import React from 'react';
import './CommentInfo.scss';

export const CommentInfo = ({ comment }) => {
  if (!comment) {
    return null;
  }

  return (
    <div className="CommentInfo" data-cy="comment">
      <h4 className="CommentInfo__name" data-cy="comment-name">
        {comment.name}
      </h4>
      <p className="CommentInfo__body" data-cy="comment-body">
        {comment.body}
      </p>
      <a
        className="CommentInfo__email"
        data-cy="comment-email"
        href={`mailto:${comment.email}`}
      >
        {comment.email}
      </a>
    </div>
  );
};

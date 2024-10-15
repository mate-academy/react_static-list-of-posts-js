import React from 'react';

export const CommentInfo = ({ comment }) => (
  <div className='CommentInfo'>
    <p className='CommentInfo__body'>{comment.body}</p>
    <p className='CommentInfo__name'>
      <strong>Commented by:</strong> {comment.authorName}
    </p>
    <p className="CommentInfo__email">
      <strong>Email:</strong>
      <a href={`mailto:${comment.email}`}>{comment.email}</a>
    </p>
  </div>
);

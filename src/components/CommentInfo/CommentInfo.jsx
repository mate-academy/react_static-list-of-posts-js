import React from 'react';

export const CommentInfo = ({ comment }) => (
  <div className="CommentInfo">
    <div className="CommentInfo__title">
      <strong className="CommentInfo__name">{comment.name}</strong>
      {/* <br /><br /> */}
      {' by '}
      {/* <br /><br /> */}
      <a
        className="CommentInfo__email"
        href={`mailto:${comment.email}`}
      >
        {`mailto:${comment.email}`}
      </a>
    </div>

    <div className="CommentInfo__body">
      {comment.body}
    </div>
  </div>
);

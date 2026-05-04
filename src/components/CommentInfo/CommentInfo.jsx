import './CommentInfo.scss';
import React from 'react';

export const CommentInfo = ({ comment }) => {
  const { name, email, body } = comment;

  return (
    <div className="CommentInfo">
      <div className="CommentInfo__name">{name}</div>
      <a className="CommentInfo__email" href={`mailto:${email}`}>
        {email}
      </a>
      <p className="CommentInfo__body">{body}</p>
    </div>
  );
};

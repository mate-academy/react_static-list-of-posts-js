import React from 'react';
import './CommentInfo.scss';

export const CommentInfo = ({ comment }) => {
  const { name, email, body } = comment;

  return (
    <div className="CommentInfo">
      <p className="CommentInfo__name">{name}</p>

      <a className="CommentInfo__email" href={`mailto:${email}`}>
        {email}
      </a>

      <p className="CommentInfo__body">{body}</p>
    </div>
  );
};

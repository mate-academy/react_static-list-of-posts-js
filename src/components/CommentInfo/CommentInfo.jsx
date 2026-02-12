import React from 'react';
import './CommentInfo.scss';

export const CommentInfo = ({ comment }) => {
  const { name, email, body } = comment;

  return (
    <article className="CommentInfo" data-cy="CommentInfo">
      <div className="CommentInfo__header">
        <h3 className="CommentInfo__name">{name}</h3>
        <a href={`mailto:${email}`} className="CommentInfo__email">
          {email}
        </a>
      </div>
      <p className="CommentInfo__body">{body}</p>
    </article>
  );
};

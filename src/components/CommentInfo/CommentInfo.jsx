import React from 'react';

export const CommentInfo = ({ comment }) => {
  const { name, email, body } = comment;

  return (
    <div className="CommentInfo">
      <div className="CommentInfo__title">
        <strong className="CommentInfo__name">{name}</strong>

        {' by '}

        <a className="CommentInfo__email" href={`mailto:${comment.email}`}>
          {email}
        </a>
      </div>

      <div className="CommentInfo__body">{body}</div>
    </div>
  );
};

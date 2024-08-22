import React from 'react';
import './CommentList.scss';

export const CommentList = ({ comments }) => {
  return comments.map(({ id, name, email, body }) => (
    <div key={id} className="CommentList">
      <div className="CommentInfo">
        <div className="CommentInfo__title">
          <strong className="CommentInfo__name">{name}</strong>
          {' by '}
          <a className="CommentInfo__email" href={`mailto:${email}`}>
            {email}
          </a>
        </div>
        <div className="CommentInfo__body">{body}</div>
      </div>
    </div>
  ));
};

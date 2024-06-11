import React from 'react';
import './CommentList.scss';

export const CommentList = ({ comments }) => {
  return comments.map(com => (
    <div key={com.id} className="CommentInfo">
      <div className="CommentInfo__title">
        <strong className="CommentInfo__name">{com.name}</strong>
        {' by '}
        <a className="CommentInfo__email" href={`mailto:${com.email}`}>
          {com.email}
        </a>
      </div>
      <div className="CommentInfo__body">{com.body}</div>
    </div>
  ));
};

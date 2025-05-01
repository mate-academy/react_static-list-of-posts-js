// src/components/CommentInfo.jsx
import React from 'react';
import './CommentInfo.scss';

export const CommentInfo = ({ comment }) => (
  <div className="Comment">
    <h4 className="Comment__name">{comment.name}</h4>
    <p className="Comment__body">{comment.body}</p>
  </div>
);

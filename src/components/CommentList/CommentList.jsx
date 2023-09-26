import React from 'react';
import './CommentList.scss';
import { CommentInfo } from '../CommentInfo';

export const CommentList = ({ comments }) => (
  <ul className="CommentList">
    {comments.map(comment => (
      <li key={comment.id} className="CommentList__item">
        <CommentInfo comment={comment} />
      </li>
    ))}
  </ul>
);

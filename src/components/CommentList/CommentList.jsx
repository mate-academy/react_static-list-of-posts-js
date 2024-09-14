import React from 'react';
import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

export const CommentList = ({ comments }) => (
  <ul className="CommentList">
    {comments.map(comment => (
      <li key={comment.id} className="CommentList__item">
        <CommentInfo comment={comment} />
      </li>
    ))}
  </ul>
);

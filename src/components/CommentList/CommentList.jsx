import React from 'react';
import { CommentInfo } from '../CommentInfo/CommentInfo'; // Додай цей рядок!
import './CommentList.scss';

export const CommentList = ({ comments }) => {
  return (
    <div className="CommentList">
      {comments.map(comment => (
        <CommentInfo key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

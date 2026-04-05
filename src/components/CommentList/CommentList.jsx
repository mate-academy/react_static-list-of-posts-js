import React from 'react';
import { CommentInfo } from '../CommentInfo/CommentInfo';
import './CommentList.scss';

export const CommentList = ({ comments, items }) => {
  const data = comments || items || [];

  return (
    <div className="CommentList">
      {data.map(comment => (
        <CommentInfo info={comment} comment={comment} key={comment.id} />
      ))}
    </div>
  );
};

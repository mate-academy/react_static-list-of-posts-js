import React from 'react';
import { CommentInfo } from '../CommentInfo/CommentInfo';
import './CommentList.scss';

export const CommentList = ({ comments }) => (
  <div className="CommentList">
    <div>
      {comments.map(comment => (
        <div key={comment.id}>
          <CommentInfo comment={comment} />
        </div>
      ))}
    </div>
  </div>
);

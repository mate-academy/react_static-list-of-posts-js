import React from 'react';
import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

export const CommentList = ({ comments }) => (
  <div className="CommentList">
    {comments.map(comment => (
      <React.Fragment key={comment.id}>
        <CommentInfo comment={comment} />
      </React.Fragment>
    ))}
  </div>
);

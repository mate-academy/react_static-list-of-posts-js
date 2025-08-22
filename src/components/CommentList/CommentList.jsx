// src/components/CommentList/CommentList.jsx
import React, { Fragment } from 'react';
import { CommentInfo } from '../CommentInfo/CommentInfo';

export const CommentList = ({ comments }) => {
  return (
    <div className="CommentList">
      <h3>Comentários</h3>
      {comments.map(comment => (
        <Fragment key={comment.id}>
          <CommentInfo comment={comment} />
        </Fragment>
      ))}
    </div>
  );
};

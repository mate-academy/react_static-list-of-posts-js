import React from 'react';
import { CommentInfo } from '../CommentInfo/CommentInfo';

export const CommentList = ({ comments = [] }) => {
  return comments.length === 0 ? (
    <b data-cy="NoCommentsMessage">No comments yet</b>
  ) : (
    <div>
      {comments.map(comment => (
        <CommentInfo key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

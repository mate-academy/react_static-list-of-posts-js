import React from 'react';
import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

export const CommentList = ({ comments }) => {
  const { id } = comments;

  return (
    <div className="CommentList">
      {comments && comments.length > 0 ? comments.map(comment => (
        <CommentInfo key={id} comment={comment} />
      )) : <b data-cy="NoCommentsMessage">No comments yet</b>}
    </div>
  );
};

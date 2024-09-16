import React from 'react';
import { CommentInfo } from '../CommentInfo/CommentInfo';
import './CommentList.scss';

export const CommentList = ({ comments }) => {
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {comments.length === 0 ? (
        <b data-cy="NoCommentsMessage">No comments yet</b>
      ) : (
        <div className="CommentList">
          {comments.map(comment => (
            <CommentInfo comment={comment} key={comment.id} />
          ))}
        </div>
      )}
    </>
  );
};

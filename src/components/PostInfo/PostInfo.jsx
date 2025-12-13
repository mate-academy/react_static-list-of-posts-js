import React from 'react';
import './PostInfo.scss';

import CommentList from '../CommentList/CommentList';

export const PostInfo = ({ body, comments }) => {
  return (
    <div className="PostInfo">
      <p className="PostInfo_body">{body}</p>
      {comments && comments.length !== 0 ? (
        <CommentList comments={comments} />
      ) : (
        <b data-cy="NoCommentsMessage">No comments yet</b>
      )}
    </div>
  );
};

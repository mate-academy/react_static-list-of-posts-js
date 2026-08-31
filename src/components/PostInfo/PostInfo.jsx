import React from 'react';
import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';
import './PostInfo.scss';

export const PostInfo = ({ post }) => {
  const { title, user, comments = [] } = post;

  return (
    <div className="PostInfo">
      <h2 className="PostInfo__title">{title}</h2>
      {user && <UserInfo user={user} />}

      {comments.length > 0 ? (
        <CommentList comments={comments} />
      ) : (
        <p data-cy="NoCommentsMessage">No comments yet</p>
      )}
    </div>
  );
};

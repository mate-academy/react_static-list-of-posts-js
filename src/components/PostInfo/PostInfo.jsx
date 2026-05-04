import './PostInfo.scss';
import React from 'react';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

export const PostInfo = ({ post }) => {
  const { title, body, user, comments } = post;

  return (
    <div className="PostInfo">
      <h2 className="PostInfo__title">{title}</h2>
      <p className="PostInfo__body">{body}</p>

      {user && <UserInfo user={user} />}

      {comments.length > 0 ? (
        <CommentList comments={comments} />
      ) : (
        <p data-cy="NoCommentsMessage">No comments yet</p>
      )}
    </div>
  );
};

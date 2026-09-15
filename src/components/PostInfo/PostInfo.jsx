import React from 'react';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';
import './PostInfo.scss';

export const PostInfo = ({ post }) => {
  const { title, body, user, comments } = post;

  return (
    <div className="PostInfo">
      <h3 className="PostInfo__title">{title}</h3>
      <p>{body}</p>
      {user && <UserInfo user={user} />}
      {comments?.length > 0 ? (
        <CommentList comments={comments} />
      ) : (
        <p data-cy="NoCommentsMessage">No comments yet.</p>
      )}
    </div>
  );
};

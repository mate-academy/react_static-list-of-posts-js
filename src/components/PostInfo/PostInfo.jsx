import React from 'react';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';
import './PostInfo.scss';

export const PostInfo = ({ post }) => {
  const { title, body, user, comments } = post;

  return (
    <div className="PostInfo" data-cy="PostInfo">
      <h2 className="PostInfo__title">{title}</h2>
      <p className="PostInfo__body">{body}</p>

      <div className="PostInfo__user">
        <UserInfo user={user} />
      </div>

      <div className="PostInfo__comments">
        {comments && comments.length > 0 ? (
          <CommentList comments={comments} />
        ) : (
          <p data-cy="NoCommentsMessage">No comments yet</p>
        )}
      </div>
    </div>
  );
};

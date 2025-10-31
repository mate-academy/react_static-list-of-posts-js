import React from 'react';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';
import './PostInfo.scss';

export const PostInfo = ({ post }) => {
  if (!post) {
    return null;
  }

  const { title, body, user, comments } = post;

  return (
    <div className="PostInfo">
      <h2 className="PostInfo__title">{title}</h2>

      {user ? (
        <UserInfo user={user} />
      ) : (
        <p className="PostInfo__no-user">No user data</p>
      )}

      <p className="PostInfo__body">{body}</p>

      {/* Коментарі */}
      <CommentList comments={comments} />
    </div>
  );
};


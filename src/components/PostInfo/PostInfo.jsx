import React from 'react';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';
import './PostInfo.scss';

export const PostInfo = ({ post }) => {
  return (
    <div className="PostInfo">
      <h1 className="PostInfo__title">{post.title}</h1>
      <p className="PostInfo__body">{post.body}</p>
      <UserInfo user={post.user} />
      {post.comments && post.comments.length > 0 ? (
        <CommentList comments={post.comments} />
      ) : (
        <div data-cy="NoCommentsMessage">No comments available</div>
      )}
    </div>
  );
};

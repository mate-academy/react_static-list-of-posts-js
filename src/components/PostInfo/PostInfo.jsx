import React from 'react';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';
import './PostInfo.scss';

export const PostInfo = ({ post }) => (
  <div className="PostInfo">
    <h2 className="PostInfo__title">{post.title}</h2>
    <p className="PostInfo__body">{post.body}</p>

    <UserInfo user={post.user} />

    {post.comments?.length > 0 ? (
      <CommentList comments={post.comments} />
    ) : (
      <p data-cy="NoCommentsMessage">No comments yet</p>
    )}
  </div>
);

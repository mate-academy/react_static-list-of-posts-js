import React from 'react';
import { CommentList } from '../CommentList';
import './PostInfo.scss';

export const PostInfo = ({ post }) => (
  <div className="PostInfo">
    <h2 className="PostInfo__title">{post.title}</h2>
    <p className="PostInfo__body">{post.body}</p>
    <p className="PostInfo__user">Author: {post.user.name}</p>
    <div className="UserInfo">
      <p className="UserInfo__name">{post.user.name}</p>
    </div>
    <CommentList comments={post.comments} />
  </div>
);

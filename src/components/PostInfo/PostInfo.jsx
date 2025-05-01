// src/components/PostInfo.jsx
import React from 'react';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';

import './PostInfo.scss';

export const PostInfo = ({ post }) => (
  <div className="PostInfo">
    <h2 className="Post__title">{post.title}</h2>
    <p className="Post__body">{post.body}</p>
    <UserInfo user={post.user} />
    <CommentList comments={post.comments} />
  </div>
);

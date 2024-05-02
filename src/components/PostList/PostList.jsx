import './PostList.scss';
import React from 'react';
import { PostInfo } from '../PostInfo';

export const PostList = ({ posts }) => (
  <div className="PostList">
    {posts.map(post => (
      <PostInfo key={post.id} {...post} />
    ))}
  </div>
);

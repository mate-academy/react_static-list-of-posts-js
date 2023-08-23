import React from 'react';
import { PostInfo } from '../PostInfo';

export const PostList = ({ posts }) => (
  <div className="PostList">
    {posts.map(({ id, ...post }) => (
      <PostInfo
        key={id}
        post={post}
      />
    ))}
  </div>
);

import React from 'react';
import { PostInfo } from '../PostInfo';

export const PostList = ({ posts }) => {
  if (!Array.isArray(posts)) return null;

  return (
    <div className="PostList">
      {posts.map(post => (
        <PostInfo key={post.id} post={post} />
      ))}
    </div>
  );
};

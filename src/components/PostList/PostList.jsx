import React from 'react';
import { PostInfo } from '../PostInfo';

export const PostList = ({ posts }) => (
  <div className="post-list">
    {posts.map(post => (
      <div key={post.id} className="PostInfo">
        <PostInfo post={post} />
      </div>
    ))}
  </div>
);

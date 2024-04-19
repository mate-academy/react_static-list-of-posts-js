import React from 'react';
import { PostInfo } from '../PostInfo/PostInfo';

export const PostList = ({ posts }) => (
  <div className="PostList">
    <div>
      {posts.map(post => (
        <div key={post.id}>
          <PostInfo post={post} />
        </div>
      ))}
    </div>
  </div>
);

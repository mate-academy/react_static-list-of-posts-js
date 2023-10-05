import React from 'react';
import { PostInfo } from '../PostInfo';

export const PostList = ({ posts }) => (
  <div className="PostList">
    {posts.map(postWithComments => (
      <PostInfo
        post={postWithComments}
        key={postWithComments.id}
      />
    ))}
  </div>
);

import React from 'react';
import { PostInfo } from '../PostInfo/PostInfo';

export const PostList = ({ posts }) => (
  <div className="PostList">
    {posts.map(postWithComm => (
      <PostInfo
        post={postWithComm}
        key={postWithComm.id}
      />
    ))}
  </div>
);

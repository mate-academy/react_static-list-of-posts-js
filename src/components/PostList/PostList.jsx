import React from 'react';
import { PostInfo } from '../PostInfo';
import './PostList.scss';

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

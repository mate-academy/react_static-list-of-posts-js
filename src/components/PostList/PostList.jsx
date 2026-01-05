import React from 'react';
import { PostInfo } from '../PostInfo/PostInfo';

export const PostList = ({ postsData }) => (
  <div className="PostList">
    {postsData.map(post => (
      <PostInfo key={post.id} post={post} />
    ))}
  </div>
);

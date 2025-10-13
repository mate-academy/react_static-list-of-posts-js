import React from 'react';
import { PostInfo } from '../PostInfo/PostInfo';
import './PostList.scss';

export const PostList = ({ posts }) => {
  return (
    <div className="Postlist">
      {posts.map(post => (
        <PostInfo key={post.id} post={post} />
      ))}
    </div>
  );
};

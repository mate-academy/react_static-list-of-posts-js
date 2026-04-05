import React from 'react';
import { PostInfo } from '../PostInfo/PostInfo';

export const PostList = ({ posts, items }) => {
  const data = posts || items || [];

  return (
    <div className="PostList">
      {data.map(post => (
        <PostInfo info={post} post={post} key={post.id} />
      ))}
    </div>
  );
};

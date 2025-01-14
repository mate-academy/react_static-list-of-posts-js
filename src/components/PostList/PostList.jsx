// import React from 'react';
import { PostInfo } from '../PostInfo/index';

export const PostList = ({ propsPosts }) => (
  <div className="PostList">
    {propsPosts.map(post => (
      <PostInfo key={post.id} propsInfo={post} />
    ))}
  </div>
);

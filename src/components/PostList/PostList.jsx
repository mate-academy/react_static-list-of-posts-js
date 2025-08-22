// src/components/PostList/PostList.jsx
import React, { Fragment } from 'react';
import { PostInfo } from '../PostInfo/PostInfo';

export const PostList = ({ posts }) => {
  return (
    <div className="PostList">
      {posts.map(post => (
        <Fragment key={post.id}>
          <PostInfo post={post} />
        </Fragment>
      ))}
    </div>
  );
};

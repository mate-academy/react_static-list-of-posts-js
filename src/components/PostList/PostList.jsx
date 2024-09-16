import React from 'react';
import { PostInfo } from '../PostInfo/PostInfo';

export const PostList = ({ posts }) => {
  return (
    <>
      {posts.map(post => {
        return <PostInfo post={post} />;
      })}
    </>
  );
};

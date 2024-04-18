import React from 'react';

import { getPosts } from '../../services';

import { PostInfo } from '../PostInfo/PostInfo';

const posts = getPosts();

export const PostList = () => {
  return (
    <div className="PostList">
      {posts.map(post => (
        <PostInfo post={post} key={post.id} />
      ))}
    </div>
  );
};

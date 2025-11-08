import React from 'react';
import './PostList.scss';
import { PostInfo } from '../PostInfo/PostInfo';

export const PostList = ({ posts }) => (
  <section className="PostList">
    {posts.map(post => (
      <PostInfo key={post.id} post={post} />
    ))}
  </section>
);

import React from 'react';
import { PostInfo } from '../PostInfo/PostInfo';
import './PostList.scss';

const PostList = ({ posts }) => (
  <div className="PostList">
    {posts.map(post => (
      <PostInfo key={post.id} post={post} />
    ))}
  </div>
);

export default PostList;

import React from 'react';
import { PostInfo } from '../PostInfo';
import './PostList.scss';

export function PostList({ posts }) {
  return (
    <ul className="PostList">
      {posts.map(p => (
        <li key={p.id}>
          <PostInfo post={p} />
        </li>
      ))}
    </ul>
  );
}

export default PostList;

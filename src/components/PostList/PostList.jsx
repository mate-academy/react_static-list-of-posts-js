import React from 'react';
import PostInfo from '../PostInfo/PostInfo';
import '../PostList/PostList.scss';

function PostList({ posts }) {
  return (
    <div className="post-list">
      {posts.map(post => (
        <PostInfo key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostList;
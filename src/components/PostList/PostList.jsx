import React from 'react';
import { PostInfo } from '../PostInfo/PostInfo';

export const PostList = ({ posts }) => (
  <div className="PostList">
    {posts.map(post => {
      return (
        <React.Fragment key={post.id}>
          <PostInfo post={post} />
        </React.Fragment>
      );
    })}
  </div>
);

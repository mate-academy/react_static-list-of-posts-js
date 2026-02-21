import React from 'react';
import { PostInfo } from '../PostInfo/PostInfo';

export const PostList = ({ modifyPosts }) => {
  return (
    <div className="PostList">
      {modifyPosts.map(post => {
        return <PostInfo post={post} key={post.id} />;
      })}
    </div>
  );
};

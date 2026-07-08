// export const PostList = () => <>Put the list here</>;
import React from 'react';
import PostInfo from '../PostInfo';
import './PostList.scss';

const PostList = ({ posts }) => {
  return (
    <div className="PostList">
      {posts.map(post => (
        <PostInfo key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;

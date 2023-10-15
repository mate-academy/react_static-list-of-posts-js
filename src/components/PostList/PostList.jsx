import React from 'react';
import { PostInfo } from '../PostInfo';

export const PostList = ({ posts, comments, users }) => (
  <div className="PostList">
    {posts.map(post => (
      <PostInfo
        key={post.id}
        post={post}
        user={users.find(user => user.id === post.userId)}
        comments={comments.filter(comment => comment.postId === post.id)}
      />
    ))}
  </div>
);

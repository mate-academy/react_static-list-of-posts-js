import React from 'react';
import { PostInfo } from '../PostInfo';

export const PostList = ({ posts, users, comments }) => (
  <div className="PostList">
    {posts.map((post) => {
      const user = users.find(u => u.id === post.userId);
      const postComments = comments.filter(comment => comment.postId === post.id
        && !comment.parentCommentId);

      return (
        <PostInfo
          key={post.id}
          post={post}
          user={user}
          comments={postComments}
        />
      );
    })}
  </div>
);

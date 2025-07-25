import React from 'react';
import { PostCard } from '../PostCard/PostCard';
import usersFromServer from '../../api/users.json';
import commentsFromServer from '../../api/comments.json';

export const PostList = ({ posts }) => {
  const preparedPosts = posts.map(post => ({
    ...post,
    user: usersFromServer.find(user => user.id === post.userId),
    comments: commentsFromServer.filter(comment => comment.postId === post.id),
  }));

  return (
    <div className="PostList">
      {preparedPosts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

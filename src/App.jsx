import React from 'react';
import postsFromApi from './api/posts';
import usersFromApi from './api/users';
import commentsFromApi from './api/comments';
import { PostList } from './components/PostList';

const posts = postsFromApi.map(post => ({
  ...post,
  user: usersFromApi.find(user => user.id === post.userId),
  comments: commentsFromApi.filter(comment => comment.postId === post.id),
}));

export const App = () => (
  <div className="app">
    <h1>Static Posts</h1>
    <PostList posts={posts} />
  </div>
);

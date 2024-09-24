import React from 'react';
import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList/PostList';

const getUserById = userId =>
  usersFromServer.find(user => user.id === userId) || null;
const getCommentsByPostId = commentId =>
  commentsFromServer.filter(comment => comment.postId === commentId);

const posts = postsFromServer.map(post => ({
  ...post,
  user: getUserById(post.userId),
  comments: getCommentsByPostId(post.id),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    {posts.map(post => (
      <PostList post={post} key={post.id} />
    ))}
  </section>
);

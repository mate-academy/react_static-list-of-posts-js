import './App.scss';
import React from 'react';
import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList/PostList';

function getUserById(userId) {
  return usersFromServer.find(user => user.id === userId) || null;
}

function getCommentId(id) {
  return commentsFromServer.filter(comment => comment.postId === id);
}

export const posts = postsFromServer.map(post => ({
  ...post,
  user: getUserById(post.userId),
  comments: getCommentId(post.id),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);

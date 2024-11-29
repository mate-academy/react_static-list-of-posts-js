import React from 'react';
import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

import { PostList } from './components/PostList';

function getUser(userId) {
  return usersFromServer.find(user => user.id === userId || null);
}

function getComments(postId) {
  const comments = [];

  commentsFromServer.forEach(comment => {
    if (comment.postId === postId) {
      comments.push(comment);
    }
  });

  return comments;
}

export const posts = postsFromServer.map(post => ({
  ...post,
  user: getUser(post.userId),
  comments: getComments(post.id),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);

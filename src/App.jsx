import React from 'react';

import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList';

function getUser(userId) {
  const foundUser = usersFromServer.find(user => user.id === userId);

  return foundUser;
}

function getComment(postId) {
  const foundComment = commentsFromServer.filter(
    comment => comment.postId === postId,
  );

  return foundComment;
}

export const posts = postsFromServer.map(post => ({
  ...post,
  user: getUser(post.userId),
  comments: getComment(post.id),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);

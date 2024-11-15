import React from 'react';

import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

import { PostList } from './components/PostList';

function setUser(user) {
  const findUser = usersFromServer.find(userFound => userFound.id === user);

  return findUser || null;
}

function setComments(comment) {
  const findComments = commentsFromServer.filter(
    commentFound => commentFound.postId === comment,
  );

  return findComments;
}

export const postsDone = postsFromServer.map(generatePosts => ({
  ...generatePosts,
  user: setUser(generatePosts.userId),
  comments: setComments(generatePosts.id),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={postsDone} />
  </section>
);

import './App.scss';
import React from 'react';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList/PostList';

function getUserById(userId) {
  return usersFromServer.find(user => user.id === userId);
}

function getCommentById(postId) {
  return commentsFromServer.filter(coment => coment.postId === postId)
  || <b data-cy="NoCommentsMessage">No comments yet</b>;
}

export const posts = postsFromServer.map(post => ({
  ...post,
  user: getUserById(post.userId),
  comments: getCommentById(post.id),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList
      posts={posts}
    />
  </section>
);

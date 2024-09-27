import './App.scss';
import React from 'react';
import { PostList } from './components/PostList/PostList';
import posts from './api/posts.json';
import usersFromServer from './api/users.json';
import commentsFromServer from './api/comments.json';

function getUserById(userId) {
  return usersFromServer.find(user => userId === user.id);
}

function getCommentsById(postId) {
  return commentsFromServer.filter(comment => comment.postId === postId);
}

const preparedPosts = posts.map(post => {
  return {
    ...post,
    user: getUserById(post.userId),
    comments: getCommentsById(post.id),
  };
});

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={preparedPosts} />
  </section>
);

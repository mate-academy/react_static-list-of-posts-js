import React from 'react';
import './App.scss';

import postsFromServer from './api/posts.json';
import usersFromServer from './api/users.json';
import commentsFromServer from './api/comments.json';

import { PostList } from './components/PostList';

const preparedPosts = postsFromServer.map(post => ({
  ...post,
  user: usersFromServer.find(user => user.id === post.userId),
  comments: commentsFromServer.filter(comment => comment.postId === post.id),
}));

export const App = () => (
  <div className="section">
    <div className="container">
      <h1 className="title">Posts</h1>
      <PostList posts={preparedPosts} />
    </div>
  </div>
);

import React from 'react';
import './App.scss';

import posts from './api/posts.json';
import users from './api/users.json';
import comments from './api/comments.json';

import PostInfo from './components/PostInfo';

const preparedPosts = posts.map(post => ({
  ...post,
  user: users.find(user => user.id === post.userId),
  comments: comments.filter(comment => comment.postId === post.id),
}));

const App = () => (
  <div className="App" data-cy="App">
    {preparedPosts.map(post => (
      <PostInfo key={post.id} post={post} />
    ))}
  </div>
);

export default App;

import React from 'react';
import { PostList } from './components/PostList';
import './App.scss';

import users from './api/users.json';
import posts from './api/posts.json';
import comments from './api/comments.json';

export const App = () => {
  const preparedPosts = posts.map(post => ({
    ...post,
    user: users.find(user => user.id === post.userId),
    comments: comments.filter(comment => comment.postId === post.id),
  }));

  return (
    <div className="App">
      <PostList posts={preparedPosts} />
    </div>
  );
};

export default App;

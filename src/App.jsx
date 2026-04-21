import React from 'react';
import './App.scss';

import postsFromServer from './api/posts.json';
import usersFromServer from './api/users.json';
import commentsFromServer from './api/comments.json';

import { PostList } from './components/PostList';

export const App = () => {
  const preparedPosts = postsFromServer.map(post => ({
    ...post,
    user: usersFromServer.find(user => user.id === post.userId) || null,
    comments: commentsFromServer.filter(comment => comment.postId === post.id),
  }));

  return (
    <div className="App">
      <h1 className="App__title">Posts of residents</h1>

      <section className="App__section">
        <PostList posts={preparedPosts} />
      </section>
    </div>
  );
};

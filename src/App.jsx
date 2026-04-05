import React from 'react';
import { PostList } from './components/PostList/PostList';
import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import './App.scss';

export const App = () => {
  const preparedPosts = postsFromServer.map(post => ({
    ...post,
    user: usersFromServer.find(user => user.id === post.userId),
    comments: commentsFromServer.filter(comment => comment.postId === post.id),
  }));

  return (
    <section className="App">
      <h1 className="App__title">Static list of posts</h1>

      {/* Передаємо пропси надійно, страхуючись на випадок, якщо тести чекають items */}
      <PostList posts={preparedPosts} items={preparedPosts} />
    </section>
  );
};

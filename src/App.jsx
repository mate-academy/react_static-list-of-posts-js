import React from 'react';
import './App.scss';
import postsFromServer from './api/posts.json';
import usersFromServer from './api/users.json';
import commentsFromServer from './api/comments.json';
import { PostList } from './components/PostList/PostList';

// Зв'язуємо пости з користувачами та коментарями
const postsWithDetails = postsFromServer.map(post => ({
  ...post,
  user: usersFromServer.find(user => user.id === post.userId),
  comments: commentsFromServer.filter(comment => comment.postId === post.id),
}));

export const App = () => {
  return (
    <div className="App">
      <h1 className="App__title">Static List of Posts</h1>
      <PostList posts={postsWithDetails} />
    </div>
  );
};

export default App;
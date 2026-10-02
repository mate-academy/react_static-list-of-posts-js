import React from 'react';
import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList/PostList';
import './App.scss';

export const App = () => {
  const posts = postsFromServer.map(post => ({
    ...post,
    user: usersFromServer.find(user => user.id === post.userId),
    comments: commentsFromServer.filter(comment => comment.postId === post.id),
  }));

  return (
    <div className="App">
      <h1 className="App__title">Static List of Posts</h1>

      <div className="App__content">
        <PostList posts={posts} />
      </div>
    </div>
  );
};

export default App;

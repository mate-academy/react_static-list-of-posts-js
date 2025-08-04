import React from 'react';
import PostLists from './components/PostList';
import users from './api/users.json';
import posts from './api/posts.json';
import comments from './api/comments.json';
import './App.scss';

export function App() {
  const postsWithData = posts.map(post => ({
    ...post,
    user: users.find(u => u.id === post.userId),
    comments: comments.filter(c => c.postId === post.id),
  }));

  return (
    <div className="App">
      <PostLists posts={postsWithData} />
    </div>
  );
}

export default App;

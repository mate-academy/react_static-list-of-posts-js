import React from 'react';
import postsData from './api/posts.json';
import usersData from './api/users.json';
import commentsData from './api/comments.json';
import PostList from './components/PostList/PostList';

function App() {
  const posts = postsData.map(post => {
    const user = usersData.find(u => u.id === post.userId);
    const comments = commentsData
      .filter(c => c.postId === post.id)
      .map(c => ({ ...c, user: usersData.find(u => u.id === c.userId) }));

    return { ...post, user, comments };
  });

  return (
    <div className="App">
      <h1>Static List of Posts</h1>
      <PostList posts={posts} />
    </div>
  );
}

export default App;

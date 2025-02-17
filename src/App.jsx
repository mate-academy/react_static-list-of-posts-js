import React, { useEffect, useState } from 'react';
import { PostList } from './components/PostList';
import postsData from './api/posts.json';
import usersData from './api/users.json';
import commentsData from './api/comments.json';
import './App.scss';

export const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const preparedPosts = postsData.map(post => ({
      ...post,
      user: usersData.find(user => user.id === post.userId),
      comments: commentsData.filter(comment => comment.postId === post.id),
    }));

    setPosts(preparedPosts);
  }, []);

  return (
    <div className="App">
      <h1>Static List of Posts</h1>
      <PostList posts={posts} />
    </div>
  );
};

export default App;

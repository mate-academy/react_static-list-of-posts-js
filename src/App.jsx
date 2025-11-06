import React, { useState, useEffect } from 'react';
import './App.scss';
import { PostList } from './components/PostList/PostList';

import posts from './api/posts.json';
import comments from './api/comments.json';
import users from './api/users.json';

const getPosts = () => Promise.resolve(posts);
const getComments = () => Promise.resolve(comments);
const getUsers = () => Promise.resolve(users);

export const App = () => {
  const [postsState, setPostsState] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    Promise.all([getPosts(), getComments(), getUsers()])
      .then(([postsData, commentsData, usersData]) => {
        const enrichedPosts = postsData.map(post => ({
          ...post,
          user: usersData.find(u => u.id === post.userId),
          comments: commentsData.filter(c => c.postId === post.id),
        }));

        setPostsState(enrichedPosts);
      })
      .catch(() => {
        setError('Failed to load data');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <section className="App">
      <h1 className="App__title">Static list of posts</h1>

      {loading && <p>Loading posts...</p>}
      {error && <p className="error">{error}</p>}

      {!loading && !error && <PostList posts={postsState} />}
    </section>
  );
};

import React, { useState, useEffect } from 'react';
import { PostList } from './components/PostList/PostList';
import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

export const App = () => {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setPosts(postsFromServer);
    setComments(commentsFromServer);
    setUsers(usersFromServer);
  }, []);

  return (
    <section className="App">
      <h1 className="App__title">Static list of posts</h1>
      <PostList posts={posts} users={users} comments={comments} />
    </section>
  );
};

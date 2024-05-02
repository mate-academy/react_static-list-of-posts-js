import './App.scss';
import React from 'react';
import { PostList } from './components/PostList';
import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

const addUserData = (posts, users, comments) => {
  return posts.map(post => ({
    ...post,
    user: users.find(user => user.id === post.userId),
    comments: comments.filter(comment => comment.postId === post.id),
  }));
};

export const App = () => {
  const postsWithUserData = addUserData(
    postsFromServer,
    usersFromServer,
    commentsFromServer,
  );

  return (
    <section className="App">
      <h1 className="App__title">Static list of posts</h1>
      <PostList posts={postsWithUserData} />
    </section>
  );
};

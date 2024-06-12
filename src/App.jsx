import React from 'react';
import { PostList } from './components/PostList';
import postsData from './api/posts.json';
import commentsData from './api/comments.json';
import usersData from './api/users.json';
import './App.scss';

const preparePosts = (posts, users, comments) => {
  return posts.map(post => {
    const postUser = users.find(user => user.id === post.userId);
    const postComments = comments.filter(comment => comment.postId === post.id);

    return {
      ...post,
      user: postUser,
      comments: postComments,
    };
  });
};

const postsFromServer = preparePosts(postsData, usersData, commentsData);

export const App = () => {
  return (
    <section className="App">
      <div className="App">
        <h1 className="App__title">Static list of posts</h1>
        <PostList postsFromServer={postsFromServer} />
      </div>
    </section>
  );
};

import './App.scss';
import React from 'react';
import { PostList } from './components/PostList/PostList';
import postsData from './api/posts.json';
import commentsData from './api/comments.json';
import usersData from './api/users.json';

export const App = () => {
  // Combine posts with their users and comments
  const postsWithData = postsData.map(post => {
    const user = usersData.find(u => u.id === post.userId);
    const postComments = commentsData.filter(
      comment => comment.postId === post.id,
    );

    return {
      ...post,
      user,
      comments: postComments,
    };
  });

  return (
    <section className="App">
      <h1 className="App__title">Static list of posts</h1>
      <PostList posts={postsWithData} />
    </section>
  );
};

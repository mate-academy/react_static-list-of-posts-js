import React from 'react';
import './App.scss';
import { PostList } from './components/PostList/PostList';
import { preparePosts } from './utils/preparePosts';

const posts = preparePosts();

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);

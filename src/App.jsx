import React from 'react';
import './App.scss';
import { posts } from './components/dataPreparation/dataPreparation';
import { PostList } from './components/PostList';

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);

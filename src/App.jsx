import './App.scss';
import React from 'react';
import { PostList } from './components/PostList';
import { preparePosts } from './api/prepareData';

export function App() {
  const posts = preparePosts();

  return (
    <div className="app">
      <header className="app-header">
        <h1>Todo List</h1>
      </header>
      <main className="app-content">
        <PostList posts={posts} />
      </main>
    </div>
  );
}

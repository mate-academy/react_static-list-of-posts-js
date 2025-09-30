import React from 'react';
import { posts } from './data';
import PostList from './components/PostList/PostList';
//import './App.scss';

function App() {
  return (
    <div className="App">
      <PostList posts={posts} />
    </div>
  );
}

export default App;
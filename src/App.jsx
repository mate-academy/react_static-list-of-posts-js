import { useState } from 'react';
import './App.scss';

import { PostList } from './components/PostList';
import { allPosts } from './helpers/helpers';

export const App = () => {
  const [posts] = useState(allPosts);

  return (
    <section className="App">
      <h1 className="App__title">Static list of posts</h1>
      <PostList posts={posts} />
    </section>
  );
};

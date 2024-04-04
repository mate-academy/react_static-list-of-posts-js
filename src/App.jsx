import './App.scss';

import { PostList } from './components/PostList';
import { posts } from './api/postsWithUserComment';

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);
